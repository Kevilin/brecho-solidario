import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
