import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKEd6ILur0ivme0Mcr1xsgOSGN55q4BZo",
    authDomain: "gamespot-fd0a4.firebaseapp.com",
    projectId: "gamespot-fd0a4",
    storageBucket: "gamespot-fd0a4.appspot.com",
    messagingSenderId: "1039438838741",
    appId: "1:1039438838741:web:4190a2408233b01bccdb5c",
    measurementId: "G-R37M71278J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
    firebaseApp,
    auth,
    db
}