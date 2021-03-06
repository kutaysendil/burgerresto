import firebase from "firebase";
import "firebase/storage";
import "firebase/auth";

import "firebase/firebase-storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlqyblinEPlXpJCuigqRvWCLEPc9x3jEA",
  authDomain: "reactfirebaserestauranthamb.firebaseapp.com",
  projectId: "reactfirebaserestauranthamb",
  storageBucket: "reactfirebaserestauranthamb.appspot.com",
  messagingSenderId: "214898662878",
  appId: "1:214898662878:web:51ce4d4bf6db08d408114f",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const imgStorage = firebaseApp.storage();

//tarih
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
//Giriş için
const auth = firebase.auth();

//const provider = new firebase.auth.GoogleAuthProvider();

export default db;

export { auth, imgStorage, timeStamp };
