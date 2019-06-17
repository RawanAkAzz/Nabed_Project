import firebase from 'firebase';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyCSWmnntq9jSeip9FoxqLHDpDI9AyK9x0g",
    authDomain: "nabeedproject.firebaseapp.com",
    databaseURL: "https://nabeedproject.firebaseio.com",
    projectId: "nabeedproject",
    storageBucket: "",
    messagingSenderId: "404590937675",
    appId: "1:404590937675:web:19add4862b1f92bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export{
    storage , firebase as default 
}