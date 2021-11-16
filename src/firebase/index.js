import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA9WG-9hu-yHK5O0R9-faDxIr_Y2OhhV9U",
    authDomain: "fruto-tienda.firebaseapp.com",
    projectId: "fruto-tienda",
    storageBucket: "fruto-tienda.appspot.com",
    messagingSenderId: "578904334777",
    appId: "1:578904334777:web:067ef43a33597924939668",
    measurementId: "G-6C6LYYYX07"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
