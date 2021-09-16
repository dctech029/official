import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyArfurivmc-TRCrSe3NI2LXCCXBqNhhEAs",
    authDomain: "dctech-official.firebaseapp.com",
    projectId: "dctech-official",
    storageBucket: "dctech-official.appspot.com",
    messagingSenderId: "601318115401",
    appId: "1:601318115401:web:c9fc26ae4137f94d8c9798"
};

const app = firebase.initializeApp(firebaseConfig);
firebase.analytics(app)
export default firebase;