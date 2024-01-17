import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIwei28ES_tTRy5cMn5gusWRfkn-x2HGc",
  authDomain: "crwn-clothing-db-3e993.firebaseapp.com",
  projectId: "crwn-clothing-db-3e993",
  storageBucket: "crwn-clothing-db-3e993.appspot.com",
  messagingSenderId: "348001473625",
  appId: "1:348001473625:web:f857e9f87653ca31028d48",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
