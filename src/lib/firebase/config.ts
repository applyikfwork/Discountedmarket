// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1uNQqd1Q6jmeXW8N8OFbbHkO0AVPJKec",
  authDomain: "discountedmarkets.firebaseapp.com",
  projectId: "discountedmarkets",
  storageBucket: "discountedmarkets.appspot.com",
  messagingSenderId: "446776207972",
  appId: "1:446776207972:web:72ed08e28d9d468f484d71",
  measurementId: "G-67KY7766CC"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
