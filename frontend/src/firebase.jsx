import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyD1S_YHe7iR7aFhzzlDQ8Jz91wp-ISvnbA",
  authDomain: "cerebrotrack.firebaseapp.com",
  projectId: "cerebrotrack",
  storageBucket: "cerebrotrack.firebasestorage.app",
  messagingSenderId: "550929587909",
  appId: "1:550929587909:web:7497b45e653dfb11bddaac",
  measurementId: "G-3041CKY70P"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);