// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbMVyM8KXEvZvfWeoy4ugXZcqZRHF2fq8",
  authDomain: "react-nath.firebaseapp.com",
  projectId: "react-nath",
  storageBucket: "react-nath.appspot.com",
  messagingSenderId: "987962201327",
  appId: "1:987962201327:web:23cec5b62725ff2d1bb71a",
  measurementId: "G-KRWGL7HKGK"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );

// const analytics = getAnalytics(app);