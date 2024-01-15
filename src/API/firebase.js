import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4Mwh0sulMm2ANDTxruuEGKQrLwY7jwzk",
  authDomain: "file-manager-53907.firebaseapp.com",
  projectId: "file-manager-53907",
  storageBucket: "file-manager-53907.appspot.com",
  messagingSenderId: "128911105976",
  appId: "1:128911105976:web:1e92b622b15f1e499f794d",
  measurementId: "G-MY3LPD556M"
};
// const firebaseConfig = {
//   apiKey: process.env.React_App_apiKey,
//   authDomain: process.env.React_App_authDomain,
//   projectId: process.env.React_App_projectId,
//   storageBucket: process.env.React_App_storageBucket,
//   messagingSenderId: process.env.React_App_messagingSenderId,
//   appId: process.env.React_App_appId,
// };

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

// export const storage = firebase.firestore();

export const auth = firebase.auth();
