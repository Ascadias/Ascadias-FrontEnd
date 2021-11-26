import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
require("dotenv").config();
const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: `${REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, firebaseConfig };
