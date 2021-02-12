import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDXuHPbBMByQMmIiHr_lWg_HnzPN55wisQ",
    authDomain: "tareasapp-ce9de.firebaseapp.com",
    projectId: "tareasapp-ce9de",
    storageBucket: "tareasapp-ce9de.appspot.com",
    messagingSenderId: "901430878759",
    appId: "1:901430878759:web:bc0802cc54bf1d3e0ce402"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export{
      db,
      googleAuthProvider,
      firebase
  }