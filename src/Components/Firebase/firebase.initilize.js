import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBTVH1wf9vrqW2cBtRcXKhnMw4FoDl3iYo",
//   authDomain: "pucpc-6df13.firebaseapp.com",
//   projectId: "pucpc-6df13",
//   storageBucket: "pucpc-6df13.appspot.com",
//   messagingSenderId: "29295504427",
//   appId: "1:29295504427:web:04d941658da628e5274e6e",
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;

