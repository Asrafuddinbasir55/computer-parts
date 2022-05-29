// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyDrzr04GN_sInRn89WyzTMbyPvySoNLI10",
    authDomain: "computer-parts-58829.firebaseapp.com",
    projectId: "computer-parts-58829",
    storageBucket: "computer-parts-58829.appspot.com",
    messagingSenderId: "265001806051",
    appId: "1:265001806051:web:ab11f1b08dd4a9b1873dd6"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;