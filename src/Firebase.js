// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuhJpw1Qf6hInVVQ5iqlDj_ZyN3xsNrpQ",
  authDomain: "amaconclone2.firebaseapp.com",
  projectId: "amaconclone2",
  storageBucket: "amaconclone2.appspot.com",
  messagingSenderId: "496795308891",
  appId: "1:496795308891:web:a44c57fbdc0a8b9c88007e",
  measurementId: "G-4L2TN9XLJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};

export default firebase;