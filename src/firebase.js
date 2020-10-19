import * as firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"
const app = {
    apiKey: "AIzaSyBivdcLGkqRtvhlloncOO9--p78IRquf1o",
    authDomain: "rimi-coffee.firebaseapp.com",
    databaseURL: "https://rimi-coffee.firebaseio.com",
    projectId: "rimi-coffee",
    storageBucket: "rimi-coffee.appspot.com",
    messagingSenderId: "893003078500",
    appId: "1:893003078500:web:23a1bf0c6e2c38867cf871",
    measurementId: "G-T2Q0Q5G3FN"
};
// export default app;
const firebaseApp = firebase.initializeApp(app);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };