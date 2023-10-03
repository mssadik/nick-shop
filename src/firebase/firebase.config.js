

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyUt0UOPMMb7V6eaLEiyEReQCt8THA7FE",
  authDomain: "nickstore-c1146.firebaseapp.com",
  projectId: "nickstore-c1146",
  storageBucket: "nickstore-c1146.appspot.com",
  messagingSenderId: "60352687449",
  appId: "1:60352687449:web:44c82d2eeff48a01917048"
};

import { getAuth } from "firebase/auth";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;