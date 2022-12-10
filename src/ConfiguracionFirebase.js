import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCSab2LL2wdHVPa4-7ibPjy0wAMpWQ5X2A",
  authDomain: "agenda-tarea.firebaseapp.com",
  projectId: "agenda-tarea",
  storageBucket: "agenda-tarea.appspot.com",
  messagingSenderId: "73076404212",
  appId: "1:73076404212:web:74ac50ba36d624da9253a1"
};

firebase.initializeApp(firebaseConfig);

export const baseDeDato = firebase.firestore();
export default firebase;
