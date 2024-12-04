// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLocy5xG_hQFos_zInpv7rCuYMat7w7C4",
  authDomain: "authapp-54f9c.firebaseapp.com",
  projectId: "authapp-54f9c",
  storageBucket: "authapp-54f9c.firebasestorage.app",
  messagingSenderId: "324378348268",
  appId: "1:324378348268:web:fa360109562ef7d124b3c9",
  measurementId: "G-FF7C2RCFP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app