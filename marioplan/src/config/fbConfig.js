import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBB2X8o-wEM-A5h9XGOy_uIQM61j852JUE",
  authDomain: "a-project-plan.firebaseapp.com",
  databaseURL: "https://a-project-plan.firebaseio.com",
  projectId: "a-project-plan",
  storageBucket: "a-project-plan.appspot.com",
  messagingSenderId: "370659038620"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
