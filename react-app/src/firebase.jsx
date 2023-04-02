import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyCJOBfnBemYOiwXGowdzWG4k04emfeOoL8',
  authDomain: 'stripe-setup-f6c96.firebaseapp.com',
  projectId: 'stripe-setup-f6c96',
  storageBucket: 'stripe-setup-f6c96.appspot.com',
  messagingSenderId: '773012306851',
  appId: '1:773012306851:web:56c25d0cbb4abd7af77816'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

// Initialize Authentication and get a reference to the service
export const auth = getAuth(app)
