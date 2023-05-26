import { defineStore } from "pinia";
import {db, auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup, 
  GoogleAuthProvider,
} from "firebase/auth";

import { getDoc,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    collection,
    query,
    where,
    orderBy,
    onSnapshot,
    Timestamp 
} from 'firebase/firestore'
import {  generateInitial, generateRandomColor } from '../utilities/avatar'

import router from "../router";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: null,
    contacts: [],
    users: [],
  }),
  
  actions: {
    async createUserDocument(user) {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: user.email,
          contacts: [],
        });
    },

    async addContactsToUser(user) {
        const usersSnapshot = await getDocs(collection(db, "users"));
        const registeredUsers = usersSnapshot.docs.map((doc) => doc.id);
        const contacts = registeredUsers.filter((userId) => userId !== user.uid);
        await updateDoc(doc(db, "users", user.uid), {
          contacts: contacts,
        });
    },
  
    async updateAdditionalUserInfo(user) {
        const userColor = localStorage.getItem(`userColor_${user.uid}`);
        if (!userColor) {
          const newColor = generateRandomColor();
          localStorage.setItem(`userColor_${user.uid}`, newColor);
        }
        const userInitial = localStorage.getItem(`userInitial_${user.uid}`);
        if (!userInitial) {
          const newInitial = generateInitial(user.displayName);
          localStorage.setItem(`userInitial_${user.uid}`, newInitial);
        }
        await updateDoc(doc(db, "users", user.uid), {
          displayName: user.displayName,
          color: userColor || generateRandomColor(),
          initial: userInitial || generateInitial(user.displayName),
        });
    },

    async signup(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await this.createUserDocument(user);
        await this.addContactsToUser(user);
        await this.updateAdditionalUserInfo(user);

        router.push("/login");
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            throw new Error("Email already in use");
          case "auth/invalid-email":
            throw new Error("Invalid email");
          case "auth/operation-not-allowed":
            throw new Error("Operation not allowed");
          case "auth/weak-password":
            throw new Error("Weak password");
          default:
            throw new Error(error + "Something went wrong");
        }
      }
      this.user = auth.currentUser;
    },
    async login(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/");
      } catch (error) {
        switch (error.code) {
          case "auth/invalid-email":
            throw new Error("Invalid email");
          case "auth/user-not-found":
            throw new Error("User not found");
          case "auth/wrong-password":
            throw new Error("Wrong password");
          default:
            throw new Error("Something went wrong");
        }
      }
      this.user = auth.currentUser;
    },
    async GoogleLogin() {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            await this.createUserDocument(user);
            await this.addContactsToUser(user);
            await this.updateAdditionalUserInfo(user);
      
          router.push("/");
        } catch (error) {
          throw new Error(error);
        }
        this.user = auth.currentUser;
      },
    async logout() {
      await signOut(auth);
      this.$reset();
      router.push("/login");
    },

    async fetchContactDetails(contactIds) {
        const userDetails = [];

        for (const contactId of contactIds) {
            const userSnapshot = await getDoc(doc(db, "users", contactId));
            const userData = userSnapshot.data();

        if (userData) {
            const userDetail = {
            id: contactId,
            displayName: userData.displayName,
            email: userData.email,
            color: userData.color,
            initial: userData.initial
            };
            userDetails.push(userDetail);
        }
        }
        this.users = userDetails;
    },
    async getContactIds() {
        const userSnapshot = await getDoc(doc(db, "users", this.user.uid));
        const userData = userSnapshot.data();
        this.contacts = userData.contacts;
    },

  },
});
