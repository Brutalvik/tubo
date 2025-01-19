// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrqBJSuqFw5SY11tMPLUWQwSnj7JBOpsM",
  authDomain: "tubo125.firebaseapp.com",
  projectId: "tubo125",
  storageBucket: "tubo125.firebasestorage.app",
  messagingSenderId: "1057269255713",
  appId: "1:1057269255713:web:e161e6e07b832bc57ddd60",
  measurementId: "G-5F0PRDNDE2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
