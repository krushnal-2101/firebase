import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APPID,

    apiKey: "AIzaSyDZJ6bl0d5GbvVz9cDyVtl1SjrXQxrbJ6I",
  authDomain: "fir-auth-c449b.firebaseapp.com",
  projectId: "fir-auth-c449b",
  storageBucket: "fir-auth-c449b.firebasestorage.app",
  messagingSenderId: "619329501461",
  appId: "1:619329501461:web:c839a279e872a851a0111c",
  measurementId: "G-C42F53RLP3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
