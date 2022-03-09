import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyA2o7bgFhupTlhl2krfFFgum0qloZ_HrbY",
    authDomain: "sistema-chamados-c7cb4.firebaseapp.com",
    projectId: "sistema-chamados-c7cb4",
    storageBucket: "sistema-chamados-c7cb4.appspot.com",
    messagingSenderId: "488985164487",
    appId: "1:488985164487:web:9abc938abc268eb0ff1ce2",
    measurementId: "G-M8D8F8C4F5"
};
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;