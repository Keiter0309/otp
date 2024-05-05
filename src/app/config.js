// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgvvQMDBd5V5BuHmBpfSNlvogoUQApvHM",
  authDomain: "otpnextjs.firebaseapp.com",
  projectId: "otpnextjs",
  storageBucket: "otpnextjs.appspot.com",
  messagingSenderId: "501959292611",
  appId: "1:501959292611:web:a50d1bed6ab795e6889476",
  measurementId: "G-DS4RCWFEKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}