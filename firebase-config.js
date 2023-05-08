// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configurationF
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKIpDkh6WJYtEHwdPWDE6qQXYjhf8yUsk",
  authDomain: "bizim-90abf.firebaseapp.com",
  projectId: "bizim-90abf",
  storageBucket: "bizim-90abf.appspot.com",
  messagingSenderId: "792238747756",
  appId: "1:792238747756:web:bd4cbdd0a2a118413c2849",
  measurementId: "G-3Z06G6Z2L4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
