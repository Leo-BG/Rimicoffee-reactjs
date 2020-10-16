import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBivdcLGkqRtvhlloncOO9--p78IRquf1o",
    authDomain: "rimi-coffee.firebaseapp.com",
    databaseURL: "https://rimi-coffee.firebaseio.com",
    projectId: "rimi-coffee",
    storageBucket: "rimi-coffee.appspot.com",
    messagingSenderId: "893003078500",
    appId: "1:893003078500:web:23a1bf0c6e2c38867cf871",
    measurementId: "G-T2Q0Q5G3FN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }