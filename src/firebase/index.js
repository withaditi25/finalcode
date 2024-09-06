import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
import 'firebase/auth';
import firebaseConfigDev from './firebaseConfig';

// firebase.initializeApp(process.env.NODE_ENV==='production'?firebaseConfigProd:firebaseConfigDev);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfigDev);
}

else {
  firebase.app(); // if already initialized, use that one
}

export {firebase};

const db = firebase.database();

export default db;
