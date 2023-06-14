import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyD8WNrNq0E_CnPwJlHqk-XRxpOiuxyDat8',
  authDomain: 'library-app-9ee0a.firebaseapp.com',
  projectId: 'library-app-9ee0a',
  storageBucket: 'library-app-9ee0a.appspot.com',
  messagingSenderId: '407385098171',
  appId: '1:407385098171:web:d1146166f09451dbd2e69e',
  measurementId: 'G-P9Z9J0S6BN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
