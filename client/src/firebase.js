// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIz8fmymRIBnx7po7nPmhcTVywEgYGFxE",
  authDomain: "mern-blog-6be17.firebaseapp.com",
  projectId: "mern-blog-6be17",
  storageBucket: "mern-blog-6be17.appspot.com",
  messagingSenderId: "78309795182",
  appId: "1:78309795182:web:29db7a6dad3e2ba9878d7f",
  measurementId: "G-MM26D8MN7F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
