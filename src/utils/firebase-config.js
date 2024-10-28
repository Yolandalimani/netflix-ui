
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPEkaCJEV8jAKckteEKrc1Fqwg_fT3NOY",
  authDomain: "react-netflix-clone-473f9.firebaseapp.com",
  projectId: "react-netflix-clone-473f9",
  storageBucket: "react-netflix-clone-473f9.appspot.com",
  messagingSenderId: "293258978875",
  appId: "1:293258978875:web:7171e8687f75292fa81e1e",
  measurementId: "G-WZ1T9QF9PH"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);