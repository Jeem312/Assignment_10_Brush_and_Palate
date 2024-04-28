// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPZu464oRAp9_LCEhkXgYgwHyBkMuKWzw",
  authDomain: "assignment-10-b3b81.firebaseapp.com",
  projectId: "assignment-10-b3b81",
  storageBucket: "assignment-10-b3b81.appspot.com",
  messagingSenderId: "17223270405",
  appId: "1:17223270405:web:f6ef72307ecb0dc68b5c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;