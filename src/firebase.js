import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXn-gs_Dd2_r0bnxmx4Y3IDxwSJGgOAxw",
  authDomain: "challenge-398d0.firebaseapp.com",
  projectId: "challenge-398d0",
  storageBucket: "challenge-398d0.appspot.com",
  messagingSenderId: "829216521494",
  appId: "1:829216521494:web:7dffc9f91c80431bdc6437",
  measurementId: "G-8WM1H3XN2R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth }