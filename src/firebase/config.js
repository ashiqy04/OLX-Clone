import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC_xZs3zXOFGogk_FbLpY33hb4klnPiwYw",
    authDomain: "olx-clone-2d27a.firebaseapp.com",
    projectId: "olx-clone-2d27a",
    storageBucket: "olx-clone-2d27a.appspot.com",
    messagingSenderId: "91424813312",
    appId: "1:91424813312:web:fed27c6857d9f33620c3e5",
    measurementId: "G-ZP4M1D20HN"
  };

 export default firebase.initializeApp(firebaseConfig)