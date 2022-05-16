import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDUp3ZEa6-RyP88ameOhPMRuf1IfhOZkJI",
  authDomain: "todolist-d4aff.firebaseapp.com",
  projectId: "todolist-d4aff",
  storageBucket: "todolist-d4aff.appspot.com",
  messagingSenderId: "189973145988",
  appId: "1:189973145988:web:c73c38884884e1cac4d5d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
