import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu5kPub1MppZs9stnfiDWzBrNYusmAN5k",
  authDomain: "reactnetflix-b12f6.firebaseapp.com",
  projectId: "reactnetflix-b12f6",
  storageBucket: "reactnetflix-b12f6.appspot.com",
  messagingSenderId: "730414131969",
  appId: "1:730414131969:web:71ea0107f5c7ab94128900",
  measurementId: "G-LXTH3PSVR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);