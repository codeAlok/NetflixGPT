// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVrBxgIAW-SYfZbgfSK2ZwyxZWmkQ-Q0c",
  authDomain: "netflixgpt-e6871.firebaseapp.com",
  projectId: "netflixgpt-e6871",
  storageBucket: "netflixgpt-e6871.appspot.com",
  messagingSenderId: "721462474440",
  appId: "1:721462474440:web:a213e75390f9ae922417fd",
  measurementId: "G-JK2KHNCY3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);