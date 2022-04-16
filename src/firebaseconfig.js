// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHhbAj_5Sv41_0a0PUprcYVEKh8SahoqI",
  authDomain: "minimal-ecommerce-de448.firebaseapp.com",
  projectId: "minimal-ecommerce-de448",
  storageBucket: "minimal-ecommerce-de448.appspot.com",
  messagingSenderId: "913945684266",
  appId: "1:913945684266:web:71f33f9161ff11ed58d653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db

