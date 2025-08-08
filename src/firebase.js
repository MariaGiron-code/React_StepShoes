import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCi0PmqgRgrFL44NPOp_8ZJ_eMMbJJNky0",
  authDomain: "step-shoes-a8efb.firebaseapp.com",
  projectId: "step-shoes-a8efb",
  storageBucket: "step-shoes-a8efb.firebasestorage.app",
  messagingSenderId: "796735448669",
  appId: "1:796735448669:web:51c7eed9a6520b60b00fb4",
  measurementId: "G-SF4QTFS20X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db , analytics };