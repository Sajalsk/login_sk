import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={
    apiKey: "AIzaSyDvYGs4ugNbKYQpZNCH5SmoldBPs3NJQ7g",
    authDomain: "verify-otp-6fe5c.firebaseapp.com",
    projectId: "verify-otp-6fe5c",
    storageBucket: "verify-otp-6fe5c.appspot.com",
    messagingSenderId: "464402392235",
    appId: "1:464402392235:web:c19403cb1110d30f14c3ee"
}

firebase.initializeApp(config);
export default firebase