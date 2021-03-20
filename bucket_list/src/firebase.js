import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseCofig = {
  apiKey: 'AIzaSyDA-UkjifqdtHH9t3-UIIUJWVvpAbvaCKI',
  authDomain: 'sparta-react-16a94.firebaseapp.com',
  projectId: 'sparta-react-16a94',
  storageBucket: 'sparta-react-16a94.appspot.com',
  messagingSenderId: '1058748747767',
  appId: '1:1058748747767:web:399beaadc0b6d1565468f2',
  measurementId: 'G-EZ8Q6ZX4MH',
};

// 앱 초기화
firebase.initializeApp(firebaseCofig);

const firestore = firebase.firestore();

export { firestore };
