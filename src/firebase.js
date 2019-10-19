import firebase from "firebase/app";
import "firebase/firestore";

//import credentials from firebase
import { config } from "./firebaseConfig";

// initialize firebase
firebase.initializeApp(config);

export const firestore = firebase.firestore();
// firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;
