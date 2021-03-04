import firebase from 'firebase'
require ('@firebase.firestore')

const firebaseConfig = {
    apiKey: "AIzaSyD8YiTmN1x2nQLOPhAGTO_gB8SsvKT964k",
    authDomain: "news-letter-36dbf.firebaseapp.com",
    databaseURL: "https://news-letter-36dbf.firebaseio.com",
    projectId: "news-letter-36dbf",
    storageBucket: "news-letter-36dbf.appspot.com",
    messagingSenderId: "500451569487",
    appId: "1:500451569487:web:0d428bc802c3858e911f3a"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore