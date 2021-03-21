import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBDqwWjfUMy6wLppGq4bdezhn4acIY22a8',
  authDomain: 'rtan-e54e8.firebaseapp.com',
  projectId: 'rtan-e54e8',
  storageBucket: 'rtan-e54e8.appspot.com',
  messagingSenderId: '226817665122',
  appId: '1:226817665122:web:63dbb61168e6afece1c93b',
  measurementId: 'G-8F34LH4WJK',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
