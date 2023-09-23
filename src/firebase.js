import 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuk2W6br_a3zSY8Tw4yuEXtydk5hc4LhM",
  authDomain: "verifications-4c5d6.firebaseapp.com",
  projectId: "verifications-4c5d6",
  storageBucket: "verifications-4c5d6.appspot.com",
  messagingSenderId: "930164777699",
  appId: "1:930164777699:web:4ec2e64dc9edec71c91bd6"
};

// Initialize Firebase
const firebase_init = initializeApp(firebaseConfig);

export default firebase_init