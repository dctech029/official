import firebase from "firebase";
const config = {
    apiKey: "AIzaSyBvu8R_ww6AlpICKTsaBPccT52KsCtMLDI",
    authDomain: "chatter-7b8e4.firebaseapp.com",
    databaseURL: "https://chatter-7b8e4.firebaseio.com",
    projectId: "chatter-7b8e4",
    storageBucket: "chatter-7b8e4.appspot.com",
    messagingSenderId: "442750575456",
    appId: "1:442750575456:web:fe3493495495179ff73405",
    measurementId: "G-4YNM8TSLRJ"
};
firebase.initializeApp(config);
firebase.analytics();
export default firebase;