import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyChGMZPjZFkDSjWw6rNG9vQYJeDPLQIeQo",
  authDomain: "together-ecommerce.firebaseapp.com",
  projectId: "together-ecommerce",
  storageBucket: "together-ecommerce.appspot.com",
  messagingSenderId: "1075722610592",
  appId: "1:1075722610592:web:bd30d55527e4b02977a6c5",
  measurementId: "G-33HDD83QC1"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)




