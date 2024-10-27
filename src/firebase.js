import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEiyMM8LMdPTY3OfaKcyLl3zh8pFZ_taU",
  authDomain: "study-guide-international.firebaseapp.com",
  projectId: "study-guide-international",
  storageBucket: "study-guide-international.appspot.com",
  messagingSenderId: "710786563414",
  appId: "1:710786563414:web:6f2817f6d87d1e326eeaf7",
  measurementId: "G-ZDJKHRM0CW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
