import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_KEY,
  authDomain: "netflixclone-9da64.firebaseapp.com",
  projectId: "netflixclone-9da64",
  storageBucket: "netflixclone-9da64.firebasestorage.app",
  messagingSenderId: "103920508704",
  appId: "1:103920508704:web:d45614d28b4a171e5b8145",
  measurementId: "G-P08WWB5S7F"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export default db;
export {auth}
