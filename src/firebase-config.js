
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyASeh1wtlZoTnVToNubn08qG8dMk4rgoxQ",
  authDomain: "crud-app-8bb2f.firebaseapp.com",
  projectId: "crud-app-8bb2f",
  storageBucket: "crud-app-8bb2f.appspot.com",
  messagingSenderId: "653752083420",
  appId: "1:653752083420:web:6732c43a9b6af9396ea519",
  measurementId: "G-4K40E4BRGZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
