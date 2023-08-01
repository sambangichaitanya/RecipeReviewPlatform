// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPaXWE2wvILAb6ZxmQGFDdrp8iaX3naSk",
  authDomain: "recipe-sharing-c04.firebaseapp.com",
  projectId: "recipe-sharing-c04",
  storageBucket: "recipe-sharing-c04.appspot.com",
  messagingSenderId: "9956091279",
  appId: "1:9956091279:web:157cb9297475200f5ed7fa",
  measurementId: "G-3DJ9JPSZ8K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = firebaseApp.firestore();
export default db;