import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBYO27GeOy4sjckb9vxKEFPHj5wgbqowVM",
  authDomain: "login-test-43c30.firebaseapp.com",
  projectId: "login-test-43c30",
  storageBucket: "login-test-43c30.appspot.com",
  messagingSenderId: "387230437276",
  appId: "1:387230437276:web:bc94bbbe51132b6baa4259"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)