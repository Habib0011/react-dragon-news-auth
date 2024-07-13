// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCshyNjr-1O-L3Aj2DGRlWXElegKpIXi9o",
  authDomain: "react-dragon-news-auth-e9867.firebaseapp.com",
  projectId: "react-dragon-news-auth-e9867",
  storageBucket: "react-dragon-news-auth-e9867.appspot.com",
  messagingSenderId: "453576426703",
  appId: "1:453576426703:web:f8cbdece55adbace3be3ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app