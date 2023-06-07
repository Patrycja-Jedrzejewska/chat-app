import { defineStore } from 'pinia'
import { db, auth } from '../firebase/index'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import { getDoc, getDocs, setDoc, query, where, doc, updateDoc, collection } from 'firebase/firestore'
import { generateInitial, generateRandomColor } from '../utilities/avatar'

import router from '../router'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: null, //logged-in user
    contacts: [], //id of users saved as contacts of currently logged in user
    users: [], //contacts as objects
    rooms: [], //rooms array//objects
  }),

  actions: {
    //create a new user in firebase in the users table
    async createUserDocument(user) {
      try {
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email: user.email,
          contacts: [],
        })
      } catch (error) {
        throw new Error('User is null')
      }
    },
    //add/update contacts of logged-in user
    async addContactsToUser(user) {
      try {
        const usersSnapshot = await getDocs(collection(db, 'users'))
        const registeredUsers = usersSnapshot.docs.map((doc) => doc.id) //get the id of all registered users
        const contacts = registeredUsers.filter((userId) => userId !== user.uid) //registered excluding the current
        await updateDoc(doc(db, 'users', user.uid), {
          //assigning contacts to a user
          contacts,
        })
      } catch (error) {
        throw new Error(error)
      }
    },
    //Update additional information (color, initial) for the logged-in user in the users table
    async updateAdditionalUserInfo(user) {
      try {
        let userColor = localStorage.getItem(`userColor_${user.uid}`)
        if (!userColor) {
          userColor = generateRandomColor()
          localStorage.setItem(`userColor_${user.uid}`, userColor)
        }
        let userInitial = localStorage.getItem(`userInitial_${user.uid}`)
        if (!userInitial) {
          if (!user.displayName) {
            user.displayName = user.email.split('@')[0]
          }
          userInitial = generateInitial(user.displayName)
          localStorage.setItem(`userInitial_${user.uid}`, userInitial)
        }
        await updateDoc(doc(db, 'users', user.uid), {
          displayName: user.displayName,
          color: userColor,
          initial: userInitial,
        })
      } catch (error) {
        throw new Error(error)
      }
    },

    //create a new room in firebase in the rooms table
    async createRoomDocument(user) {
      try {
        // Sprawdź, czy użytkownik już ma swój pokój
        const userRoomsRef = collection(db, 'rooms')
        const userRoomsQuery = query(userRoomsRef, where('ownerId', '==', user.uid))
        const userRoomsSnapshot = await getDocs(userRoomsQuery)

        if (userRoomsSnapshot.size > 0) {
          return
        }

        let roomId = await this.generateUniqueRoomId()
        let roomRef = doc(db, 'rooms', roomId)

        // Sprawdź, czy pokój o wygenerowanym ID już istnieje w bazie danych
        let roomSnapshot = await getDoc(roomRef)
        let attempts = 1
        const maxAttempts = 5 // Limit

        while (roomSnapshot.exists() && attempts <= maxAttempts) {
          roomId = await this.generateUniqueRoomId()
          roomRef = doc(db, 'rooms', roomId)
          roomSnapshot = await getDoc(roomRef)
          attempts++
        }

        if (attempts > maxAttempts) {
          throw new Error('Failed to generate a unique room ID.')
        }

        await setDoc(roomRef, {
          roomId: roomId,
          roomName: user.displayName + `'s room`,
          ownerId: user.uid,
          guestsIds: [],
        })
      } catch (error) {
        throw new Error(error)
      }
    },
    // Generate a unique 6-digit room ID
    async generateUniqueRoomId() {
      const characters = '0123456789'
      let roomId = ''
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        roomId += characters.charAt(randomIndex)
      }
      return roomId
    },
    async fetchGuestIdsForRoom(roomId) {
      try {
        const roomRef = doc(db, 'rooms', roomId)
        const roomSnapshot = await getDoc(roomRef)

        if (roomSnapshot.exists()) {
          const roomData = roomSnapshot.data()
          const guestIds = roomData.guestsIds || []
          return guestIds.map((guest) => guest.id)
        } else {
          throw new Error('Room not found')
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    //add/update guest of room
    async addGuestsToRoom(guestId, roomId) {
      try {
        const roomRef = doc(db, 'rooms', roomId)
        const roomSnapshot = await getDoc(roomRef) //get a particular room
        const currentGuestsIds = roomSnapshot.exists() ? roomSnapshot.data().guestsIds : [] //get the current guest board
        if (!currentGuestsIds.includes(guestId)) {
          //checking if the selected guest is already added
          const updatedGuestsIds = [...currentGuestsIds, guestId] //addition of a new guest
          await updateDoc(roomRef, {
            guestsIds: updatedGuestsIds, //guest list update
          })
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    //remove guest from room
    async removeGuestFromRoom(guestId, roomId) {
      try {
        const roomRef = doc(db, 'rooms', roomId)
        const roomSnapshot = await getDoc(roomRef)
        const currentGuestsIds = roomSnapshot.exists() ? roomSnapshot.data().guestsIds : [] //get the current guest board
        //checking if the selected guest is in array
        if (currentGuestsIds.includes(guestId)) {
          // Filter out the userId from the guestsIds array
          const updatedGuestsIds = currentGuestsIds.filter((guest) => guest !== guestId)
          await updateDoc(roomRef, {
            guestsIds: updatedGuestsIds, //guest list update
          })
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    //get rooms
    async fetchRoomsDetails() {
      try {
        const user = this.user // get current user
        const userRoomsRef = collection(db, 'rooms')
        const userRoomsQuery = query(userRoomsRef, where('ownerId', '==', user.uid))
        const userRoomsSnapshot = await getDocs(userRoomsQuery)

        const roomDetailsPromises = userRoomsSnapshot.docs.map(async (doc) => {
          const roomData = doc.data()
          const roomDetail = {
            id: doc.id,
            roomName: roomData.roomName,
            ownerId: roomData.ownerId,
            guestIds: roomData.guestIds,
          }
          return roomDetail
        })

        const roomDetails = await Promise.all(roomDetailsPromises)
        this.rooms = roomDetails
      } catch (error) {
        throw new Error(error)
      }
    },
    //classic registration
    async signup(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        await this.createUserDocument(user) //creation of a new user
        await this.addContactsToUser(user) //adding contacts for a new user
        await this.updateAdditionalUserInfo(user) //adding a color and initial for a new user
        await this.createRoomDocument(user)
        router.push('/login')
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            throw new Error('Email already in use')
          case 'auth/invalid-email':
            throw new Error('Invalid email')
          case 'auth/operation-not-allowed':
            throw new Error('Operation not allowed')
          case 'auth/weak-password':
            throw new Error('Weak password')
          default:
            throw new Error(error + 'Something went wrong')
        }
      }
      this.user = auth.currentUser
    },
    //classic login
    async login(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password)

        this.user = auth.currentUser //setting the current user
        await this.addContactsToUser(this.user) //add/update contacts
        await this.getContactIds() //assigning contacts from firebase to local contacts table

        router.push('/')
      } catch (error) {
        switch (error.code) {
          case 'auth/invalid-email':
            throw new Error('Invalid email')
          case 'auth/user-not-found':
            throw new Error('User not found')
          case 'auth/wrong-password':
            throw new Error('Wrong password')
          default:
            throw new Error('Something went wrong')
        }
      }
    },
    async GoogleLogin() {
      const provider = new GoogleAuthProvider()
      try {
        const result = await signInWithPopup(auth, provider)
        const user = result.user
        this.user = auth.currentUser
        await this.createUserDocument(user) //creation of a new user
        await this.addContactsToUser(user) //adding contacts for a new user
        await this.updateAdditionalUserInfo(user) //adding a color and initial for a new user
        await this.getContactIds() //assigning contacts from firebase to local contacts table
        await this.createRoomDocument(user)
        router.push('/')
      } catch (error) {
        throw new Error(error)
      }
    },

    async logout() {
      try {
        await signOut(auth)
        this.$reset()
        router.push('/login')
      } catch (error) {
        throw new Error(error)
      }
    },
    //get other users to the users table
    async fetchContactDetails(contactIds) {
      try {
        const userDetails = []

        for (const contactId of contactIds) {
          const userSnapshot = await getDoc(doc(db, 'users', contactId))
          const userData = userSnapshot.data()

          if (userData) {
            const userDetail = {
              id: contactId,
              displayName: userData.displayName,
              email: userData.email,
              color: userData.color,
              initial: userData.initial,
            }
            userDetails.push(userDetail)
          }
        }
        this.users = userDetails
      } catch (error) {
        throw new Error(error)
      }
    },
    //assigning contacts from firebase to an array in store
    async getContactIds() {
      try {
        const userSnapshot = await getDoc(doc(db, 'users', this.user.uid))
        const userData = userSnapshot.data()
        this.contacts = userData.contacts
      } catch (error) {
        throw new Error('User is null')
      }
    },
  },
})
