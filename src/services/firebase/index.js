import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCtgTrGmkT4nDJ8eZorP4jwcJsaVJ_j0Oc",
  authDomain: "ecommerce31145.firebaseapp.com",
  projectId: "ecommerce31145",
  storageBucket: "ecommerce31145.appspot.com",
  messagingSenderId: "685694172730",
  appId: "1:685694172730:web:f8bbae7dd7400830213f03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app) 