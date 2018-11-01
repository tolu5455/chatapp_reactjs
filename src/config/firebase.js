import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC_mHBPRKTctmytAfVFv2opRPkJqy3OZoM",
    authDomain: "chatapp-reactjs.firebaseapp.com",
    databaseURL: "https://chatapp-reactjs.firebaseio.com",
    projectId: "chatapp-reactjs",
    storageBucket: "chatapp-reactjs.appspot.com",
    messagingSenderId: "1057141394602"
  };
  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;