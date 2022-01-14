import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCPWS-wM5_7AktQjrK4jadWoAnZi-_LYQs",
  authDomain: "buckle-2263a.firebaseapp.com",
  projectId: "buckle-2263a",
  storageBucket: "buckle-2263a.appspot.com",
  messagingSenderId: "520818797461",
  appId: "1:520818797461:web:6e79872642e067558a249c",
  measurementId: "G-8601HJN5LM"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, '');