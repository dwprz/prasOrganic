/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhHSyMe-m8gMnA2SlI6MsNPtcHLUyCDk0",
  authDomain: "auth-prasorganic-b84a1.firebaseapp.com",
  projectId: "auth-prasorganic-b84a1",
  storageBucket: "auth-prasorganic-b84a1.appspot.com",
  messagingSenderId: "349173590008",
  appId: "1:349173590008:web:5bf371eac8f9e334c4580d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
