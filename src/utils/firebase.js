// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbjEHkDpqK0Ut6pvmTNCwtwvFpOeO3w0k",
  authDomain: "netflixgpt-4320a.firebaseapp.com",
  projectId: "netflixgpt-4320a",
  storageBucket: "netflixgpt-4320a.firebasestorage.app",
  messagingSenderId: "993374429107",
  appId: "1:993374429107:web:bef536d5945b34141ab5c6",
  measurementId: "G-XRC16TM820"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();