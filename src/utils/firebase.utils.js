import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDVM3n0Trwraz2OyodI9QQIOX3Ye1S5kZA",
    authDomain: "crwn-clothing-db-15ea0.firebaseapp.com",
    projectId: "crwn-clothing-db-15ea0",
    storageBucket: "crwn-clothing-db-15ea0.appspot.com",
    messagingSenderId: "46895690803",
    appId: "1:46895690803:web:1dbd3a5fe44a4f5231df46"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);