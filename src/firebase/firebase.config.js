// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.VITE_APIKEY);
// Your web app's Firebase configuration
const firebaseConfig = { 
    apiKey: "AIzaSyBb1IdKAUj-UQMcGClPsC7fisDNwYUM80Q",
    authDomain: "tour-explorer-bd9d2.firebaseapp.com",
    projectId: "tour-explorer-bd9d2",
    storageBucket: "tour-explorer-bd9d2.appspot.com",
    messagingSenderId: "225268928031",
    appId: "1:225268928031:web:c7ccc0ac185291fc000f2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;