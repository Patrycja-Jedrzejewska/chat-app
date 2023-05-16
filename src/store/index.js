import { defineStore } from "pinia";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup, 
  GoogleAuthProvider
} from "firebase/auth";
import router from "../router";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: null,
  }),

  actions: {
    async signup(email, password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
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
    async GoogleLogin(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(()=>{
                router.push("/");
            })
            .catch((err)=>{
                throw new Error(err)
            })  
        this.user = auth.currentUser;
    },
    async logout() {
      await signOut(auth);
      this.$reset();
      router.push("/login");
    },
  },
});
