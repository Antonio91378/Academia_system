// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyCTLjK2TIWAww4C6Bqd8RWXZ-nDgflqLS8",
  authDomain: "academia-app-7afe4.firebaseapp.com",
  databaseURL: "https://academia-app-7afe4-default-rtdb.firebaseio.com",
  projectId: "academia-app-7afe4",
  storageBucket: "academia-app-7afe4.appspot.com",
  messagingSenderId: "392853931182",
  appId: "1:392853931182:web:04f34e890f6c040049193f",
  measurementId: "G-MKL4XKMRFH"
};

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)
const analytics = getAnalytics(app);

export { database }