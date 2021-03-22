import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyAhqO1UW_wAgeLVcLHyUajykEp5kou8lOw',
  authDomain: 'project-77-84-barter-sys-119f0.firebaseapp.com',
  projectId: 'project-77-84-barter-sys-119f0',
  storageBucket: 'project-77-84-barter-sys-119f0.appspot.com',
  messagingSenderId: '721333990280',
  appId: '1:721333990280:web:4d0acbebb3aedd49bf803d',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
