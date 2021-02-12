import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCsg701HSDTiX-HWd2DK4ILSVDB0jiIdL8",
    authDomain: "estore-34425.firebaseapp.com",
    projectId: "estore-34425",
    storageBucket: "estore-34425.appspot.com",
    messagingSenderId: "136170369505",
    appId: "1:136170369505:web:e0d52790102f6f55b8a2a0"
}
  
firebase.initializeApp(firebaseConfig);

// eStore functions
export const auth = firebase.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();