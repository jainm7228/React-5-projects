import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCAtJsVPIJ2AlpCpWLUl7GAypE2IW0yWOk",
  authDomain: "mayankportfolio-1.firebaseapp.com",
  projectId: "mayankportfolio-1",
  storageBucket: "mayankportfolio-1.appspot.com",
  messagingSenderId: "667397093311",
  appId: "1:667397093311:web:1fa71e3e388aa992fe930a",
  measurementId: "G-2HCSWMSMPB"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();