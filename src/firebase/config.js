// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKwv_AIvhWvrVrXq6BYBR56Tz82-HGVDs",
    authDomain: "react-cursos-b79c9.firebaseapp.com",
    projectId: "react-cursos-b79c9",
    storageBucket: "react-cursos-b79c9.appspot.com",
    messagingSenderId: "893302284763",
    appId: "1:893302284763:web:24f7d1ada71e79b4fdc7fe"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);