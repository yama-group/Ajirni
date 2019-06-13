import firebase from "firebase/app";
import "firebase/storage";

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAW5JQO81ThGHyRqP6VUsfoWEQ9tflMF7g",
  authDomain: "ajirni-2ce53.firebaseapp.com",
  databaseURL: "https://ajirni-2ce53.firebaseio.com",
  projectId: "ajirni-2ce53",
  storageBucket: "ajirni-2ce53.appspot.com",
  messagingSenderId: "1087329718008",
  appId: "1:1087329718008:web:58bc29f0d2ce9a3b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
