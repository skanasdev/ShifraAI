import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 authDomain: "shifraai-ca858.firebaseapp.com",
  projectId: "shifraai-ca858",
  storageBucket: "shifraai-ca858.firebasestorage.app",
  messagingSenderId: "408434792925",
  appId: "1:408434792925:web:143de512717882dfabfe34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}

