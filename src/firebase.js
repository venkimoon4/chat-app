import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALX-1zIgebMTjP1jotR5-FbsSOSYVhTFw",
  authDomain: "chat-app-ecd39.firebaseapp.com",
  projectId: "chat-app-ecd39",
  storageBucket: "chat-app-ecd39.appspot.com",
  messagingSenderId: "85219148662",
  appId: "1:85219148662:web:bbcf76ceff789a2aa4b057",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
