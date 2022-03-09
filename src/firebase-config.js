// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Oj3SynsNbX1SNAgwM1RZ2igT6u9Koug",
  authDomain: "bp-onboarding-3-db10e.firebaseapp.com",
  projectId: "bp-onboarding-3-db10e",
  storageBucket: "bp-onboarding-3-db10e.appspot.com",
  messagingSenderId: "823540129529",
  appId: "1:823540129529:web:0ec9c9c1b7e681e3e20c28",
  measurementId: "G-5EC823XWY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
