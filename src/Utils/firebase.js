// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFiNQKsBOGOVmdfhVDPZaKbf9-OZvcKnE",
  authDomain: "netflix-gpt-ccf39.firebaseapp.com",
  projectId: "netflix-gpt-ccf39",
  storageBucket: "netflix-gpt-ccf39.appspot.com",
  messagingSenderId: "55079970028",
  appId: "1:55079970028:web:4a153a822647aaaba1b1c9",
  measurementId: "G-ZZ45Z10Y88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();