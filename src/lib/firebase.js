import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore ";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d9b82.firebaseapp.com",
  projectId: "reactchat-d9b82",
  storageBucket: "reactchat-d9b82.appspot.com",
  messagingSenderId: "1001586265495",
  appId: "1:1001586265495:web:e15148f935232fe97ec8d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()