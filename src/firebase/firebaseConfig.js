// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDpK9sE1KNy2vTamJqS-KYlA9qHxnGrsI",
  authDomain: "dev-oc-5e1df.firebaseapp.com",
  databaseURL: "https://dev-oc-5e1df-default-rtdb.firebaseio.com",
  projectId: "dev-oc-5e1df",
  storageBucket: "dev-oc-5e1df.appspot.com",
  messagingSenderId: "954284552129",
  appId: "1:954284552129:web:e795d5334b980d7d86c940",
  measurementId: "G-L3LSCC1Q13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export default app;
