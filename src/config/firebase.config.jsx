// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUSBMuOi51eSwmBkgpz5s5Z-PXvgBc2-w",
  authDomain: "winsports-client-auth.firebaseapp.com",
  projectId: "winsports-client-auth",
  storageBucket: "winsports-client-auth.appspot.com",
  messagingSenderId: "104804809421",
  appId: "1:104804809421:web:188e9d0da1e3b882f60784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);