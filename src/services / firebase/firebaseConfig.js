import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBFywjXcOlw2LNvkiSE4a0USNw_hh3urBg",
  authDomain: "tiendaderepuestos-puelo.firebaseapp.com",
  projectId: "tiendaderepuestos-puelo",
  storageBucket: "tiendaderepuestos-puelo.appspot.com",
  messagingSenderId: "724395872371",
  appId: "1:724395872371:web:fcec82e45c7e2e8aa15a06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);