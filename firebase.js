// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider ,getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUqFrAVhMvMdssJyhgfq0rUVWMjC137y8",
  authDomain: "anti-depression-media.firebaseapp.com",
  projectId: "anti-depression-media",
  storageBucket: "anti-depression-media.appspot.com",
  messagingSenderId: "133174633551",
  appId: "1:133174633551:web:5a9674dde6c3887109363a",
  measurementId: "G-Y1BK5ZWR47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app,provider,auth};