import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
// Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyDCF_IojN9AwxsOsREE6deaXIetHQjCyag",
    authDomain: "magazin-349cb.firebaseapp.com",
    databaseURL: "https://magazin-349cb-default-rtdb.firebaseio.com/",
    projectId: "magazin-349cb",
    storageBucket: "magazin-349cb.appspot.com",
    messagingSenderId: "629976590769",
    appId: "1:629976590769:web:dceec275afb7dfd6877590",
    measurementId: "G-JLZ9QPX8RW"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const storage = firebase.storage();

  export {
      storage,
      firebase as default
  }