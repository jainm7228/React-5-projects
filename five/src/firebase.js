import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyABm_KI0JRMF5Syfgzb3oAutjewrDLMzCA",
  authDomain: "mayankjain-portfolio.firebaseapp.com",
  projectId: "mayankjain-portfolio",
  storageBucket: "mayankjain-portfolio.appspot.com",
  messagingSenderId: "752867653884",
  appId: "1:752867653884:web:fbb0ead4ac863ce6eb3f79",
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();