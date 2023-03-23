import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import {ref , onUnmounted} from 'vue'

const config = {
    apiKey: "AIzaSyA192yxgO68c1uHDZyKqcX_wYF9rsAh-9s",
    authDomain: "biznapps-c457e.firebaseapp.com",
    projectId: "biznapps-c457e",
    storageBucket: "biznapps-c457e.appspot.com",
    messagingSenderId: "926482480516",
    appId: "1:926482480516:web:532d1735d188d8c50071d1",
    measurementId: "G-CTE3QE94F6"
  };

const app = initializeApp(config);
console.log('Firebase App initialized', app)

const db = getFirestore();
console.log('Firestore initialized', db)

const emailsCollection = collection(db, 'emails'); 

export const createEmail = email => {
    return addDoc(emailsCollection, {email});
}