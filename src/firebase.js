import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA78mNcjnPyC-mhdz4RxOd3rM5y57fWOgE",
  authDomain: "clients-directory.firebaseapp.com",
  databaseURL: "https://clients-directory.firebaseio.com",
  projectId: "clients-directory",
  storageBucket: "clients-directory.appspot.com",
  messagingSenderId: "71180101815",
  appId: "1:71180101815:web:e5b8de23ae6e7b4f690532"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
// firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;
