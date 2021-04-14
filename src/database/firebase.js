import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB9nT1xeZ-a4w4V9AC36Baocdobe5Ecqwk",
  authDomain: "contact-list-46a5a.firebaseapp.com",
  projectId: "contact-list-46a5a",
  storageBucket: "contact-list-46a5a.appspot.com",
  messagingSenderId: "540880521602",
  appId: "1:540880521602:web:7433b6878869700713679b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
