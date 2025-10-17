// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUoZrPTqUJe7X9Ft0YnpClF8_be0qyvSI",
  authDomain: "fir-fighter-7ae29.firebaseapp.com",
  projectId: "fir-fighter-7ae29",
  storageBucket: "fir-fighter-7ae29.firebasestorage.app",
  messagingSenderId: "97887953899",
  appId: "1:97887953899:web:958f3df24074181617efae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);