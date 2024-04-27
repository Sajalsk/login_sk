
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCQcmTfHxXlHKA2AGzRIyO652M2ESOw5a4",
  authDomain: "verify-7159d.firebaseapp.com",
  projectId: "verify-7159d",
  storageBucket: "verify-7159d.appspot.com",
  messagingSenderId: "553469772002",
  appId: "1:553469772002:web:25f36571a344f92de65ebb",
  measurementId: "G-6JQ9ZVBPFH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);