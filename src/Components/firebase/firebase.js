import firebase from 'firebase';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCSWmnntq9jSeip9FoxqLHDpDI9AyK9x0g",
    authDomain: "nabeedproject.firebaseapp.com",
    databaseURL: "https://nabeedproject.firebaseio.com",
    projectId: "nabeedproject",
    storageBucket: "gs://nabeedproject.appspot.com/",
    messagingSenderId: "404590937675",
    appId: "1:404590937675:web:19add4862b1f92bb"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export{
    storage , firebase as default 
}