import * as firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDW6LprYz-ii2h-pyJVzhsNb7J-FpWH8Lw",
    authDomain: "instaclone-gunter.firebaseapp.com",
    databaseURL: "https://instaclone-gunter.firebaseio.com",
    projectId: "instaclone-gunter",
    storageBucket: "instaclone-gunter.appspot.com",
    messagingSenderId: "452887221754",
    appId: "1:452887221754:web:2af7083f986ae9493b4043",
    measurementId: "G-XVD8BM8T7V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

//firebase.analytics();