// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Aa2mQ6J9YY4Vp832WYfWRJODV-rTq9o",
  authDomain: "hospital-management-2ac38.firebaseapp.com",
  projectId: "hospital-management-2ac38",
  storageBucket: "hospital-management-2ac38.firebasestorage.app",
  messagingSenderId: "152736874829",
  appId: "1:152736874829:web:a60cc1840159c8403df704",
  measurementId: "G-1HYKEPJ247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);