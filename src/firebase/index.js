import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  authDomain: import.meta.env.VITE_FIRE_PROJECT_ID + ".firebaseapp.com",
  projectId: import.meta.env.VITE_FIRE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRE_PROJECT_ID + ".appspot.com",
  messagingSenderId: import.meta.env.VITE_FIRE_MESS_ID,
  appId: import.meta.env.VITE_FIRE_APP_ID
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth }
