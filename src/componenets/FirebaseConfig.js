import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCu39wtl3UIuSqhB_47idRC5kdnWQ9Rdaw",
  authDomain: "web2-1389a.firebaseapp.com",
  projectId: "web2-1389a",
  storageBucket: "web2-1389a.appspot.com",
  messagingSenderId: "711928738404",
  appId: "1:711928738404:web:9ef4ea941bc1e64334a571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}; 
