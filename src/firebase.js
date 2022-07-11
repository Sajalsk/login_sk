// import firebase from './firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBIDkKSNloiEA2Hq4b_Pjo2WTrGwpiVCJE",
  authDomain: "login-34a96.firebaseapp.com",
  projectId: "login-34a96",
  storageBucket: "login-34a96.appspot.com",
  messagingSenderId: "212524744654",
  appId: "1:212524744654:web:55c51bb47051faf8c3759f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;