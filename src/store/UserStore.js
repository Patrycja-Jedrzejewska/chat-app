import { defineStore } from 'pinia'
import { db, auth } from '../firebase/index'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import {
  getDoc,
  arrayUnion,
  deleteDoc,
  getDocs,
  setDoc,
  query,
  where,
  doc,
  updateDoc,
  collection,
} from 'firebase/firestore'
import { generateInitial, generateRandomColor } from '../utilities/avatar'

import router from '../router'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: null, //logged-in user
    contacts: [], //id of users saved as contacts of currently logged in user
    users: [], //contacts as objects
    rooms: [], //rooms array//objects
    roomCreationError: null,
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
    async createRoomDocument(roomName, user) {
      try {
        
        roomName=roomName.value
        console.log(roomName);
        if (roomName == undefined || roomName=='' || !roomName) {
          roomName = user.displayName + `'s room`
        }
        let roomId = await this.generateUniqueRoomId()
        let roomRef = doc(db, 'rooms', roomId)
        // Check if the room with the generated ID already exists in the database
        let roomSnapshot = await getDoc(roomRef)
        if(roomSnapshot.document!=null){
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
          const userRoomsRef = collection(db, 'rooms')
          const duplicateRoomQuery = query(
            userRoomsRef,
            where('ownerId', '==', user.uid),
            where('roomName', '==', roomName.value)
          )
          const duplicateRoomSnapshot = await getDocs(duplicateRoomQuery)
          if (!duplicateRoomSnapshot.empty) {
            throw new Error('Room already exists.')
          }
          this.roomCreationError = null
        }
        const roomDetails = {
          id: roomId,
          roomName: roomName,
          ownerId: user.uid,
          guestsIds: [],
        }
        await setDoc(roomRef,roomDetails)
        this.rooms.push(roomDetails)
      } catch (error) {
        this.setRoomCreationError(error.message)
      }
    },
    setRoomCreationError(errorMessage) {
      this.roomCreationError = errorMessage
    },
    async updateRoomName(newName, roomId) {
      try {
        const roomRef = doc(db, 'rooms', roomId) // Assuming you have a property `roomId` in the `user` object
        const userRoomsRef = collection(db, 'rooms')
        const duplicateRoomQuery = query(
          userRoomsRef,
          where('ownerId', '==', this.user.uid),
          where('roomName', '==', newName.value)
        )
        const duplicateRoomSnapshot = await getDocs(duplicateRoomQuery)
        if (!duplicateRoomSnapshot.empty) {
          throw new Error('Room name already exists.')
        }
        this.roomCreationError = null

        await updateDoc(roomRef, {
          roomName: newName.value,
        })
        const index = this.rooms.findIndex((room) => room.id === roomId)
        this.rooms[index].roomName = newName.value
      } catch (error) {
        this.setRoomCreationError(error.message)
      }
    },
    async deleteRoom(roomId) {
      try {
        const roomRef = doc(db, 'rooms', roomId)

        // Delete the room document from Firestore
        await deleteDoc(roomRef)

        // Remove the room from the local `rooms` array
        const updatedRooms = this.rooms.filter((room) => room.id !== roomId)
        this.rooms = updatedRooms
        router.push('/')
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
    //add/update guest of room
    async addGuestsToRoom(guest, roomId) {
      try {
        const roomRef = doc(db, 'rooms', roomId)
        const roomSnapshot = await getDoc(roomRef)
        const currentGuestsIds = roomSnapshot.exists() ? roomSnapshot.data().guestsIds : []

        if (currentGuestsIds && !currentGuestsIds.includes(guest)) {
          guest.isGuest = true

          await updateDoc(roomRef, {
            guestsIds: arrayUnion(guest),
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
        const roomDoc = await getDoc(roomRef)

        if (roomDoc.exists()) {
          const guestsIds = roomDoc.data().guestsIds

          const index = guestsIds.findIndex((guest) => guest.id === guestId)

          if (index !== -1) {
            guestsIds.splice(index, 1)
            await updateDoc(roomRef, {
              guestsIds: guestsIds,
            })

            await this.fetchContactDetails(roomId)
          }
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

        // Get all rooms
        const allRoomsSnapshot = await getDocs(userRoomsRef)

        const roomDetailsPromises = allRoomsSnapshot.docs.map(async (doc) => {
          const roomData = doc.data()
          const guestsIds = roomData.guestsIds

          // Check if the current user is present in guestsIds or is the owner
          const isGuest = guestsIds.some((guest) => guest.id === user.uid)
          const isOwner = roomData.ownerId === user.uid

          if (isGuest || isOwner) {
            // User is a guest or the owner in this room
            const roomDetail = {
              id: doc.id,
              roomName: roomData.roomName,
              ownerId: roomData.ownerId,
              guestsIds: guestsIds,
            }
            return roomDetail
          } else {
            // User is not a guest or the owner in this room
            return null
          }
        })

        const roomDetails = await Promise.all(roomDetailsPromises)
        this.rooms = roomDetails.filter((room) => room !== null)
      } catch (error) {
        throw new Error(error)
      }
    },
    async isGuestInRoom(guestId, roomId) {
      try {
        const roomRef = doc(db, 'rooms', roomId)
        const roomSnapshot = await getDoc(roomRef)

        if (roomSnapshot.exists()) {
          const guestIds = roomSnapshot.data().guestsIds || []

          if (Array.isArray(guestIds)) {
            return guestIds.includes(guestId)
          }
        }
        return false
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
        await this.createRoomDocument('', user)
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

        const userRoomsRef = collection(db, 'rooms')
        const userRoomsQuery = query(userRoomsRef, where('ownerId', '==', user.uid))
        const userRoomsSnapshot = await getDocs(userRoomsQuery)

        if (userRoomsSnapshot.size == 0) {
          await this.createRoomDocument('', user)
        }
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
    async fetchContactDetails(roomId) {
      try {
        const userDetails = []

        for (const contactId of this.contacts) {
          try {
            const userSnapshot = await getDoc(doc(db, 'users', contactId))

            if (userSnapshot.exists()) {
              const userData = userSnapshot.data()

              const isGuest = await this.isGuestInRoom(contactId, roomId)
              const userDetail = {
                id: contactId,
                displayName: userData.displayName,
                email: userData.email,
                color: userData.color,
                initial: userData.initial,
                isGuest: isGuest,
              }

              userDetails.push(userDetail)
            }
          } catch (error) {
            console.error(`Error fetching contact details for contactId: ${contactId}`, error)
          }
        }

        this.users = userDetails
      } catch (error) {
        console.error('Error fetching contact details:', error)
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
