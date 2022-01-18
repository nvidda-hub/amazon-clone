import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl-pcou84jI_3zNVzrN4RXOeNxEm5LyVs",
  authDomain: "clone-32ef4.firebaseapp.com",
  projectId: "clone-32ef4",
  storageBucket: "clone-32ef4.appspot.com",
  messagingSenderId: "1023461593558",
  appId: "1:1023461593558:web:75f8eb6de8be5aa96d5477",
  measurementId: "G-4NN2CZ9MKY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
