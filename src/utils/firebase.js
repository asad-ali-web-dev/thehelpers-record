import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAkzwkSPC3CXQlFpDOCfPZ-ofZ-_yWJEGk",
    authDomain: "thehelpers-record.firebaseapp.com",
    projectId: "thehelpers-record",
    storageBucket: "thehelpers-record.appspot.com",
    messagingSenderId: "205039226924",
    appId: "1:205039226924:web:4730b71a1fee3cf7968189",
    measurementId: "G-XFWRNW6LQW"
});

export const db = firebase.firestore(firebaseApp);
export const storage = firebase.storage();