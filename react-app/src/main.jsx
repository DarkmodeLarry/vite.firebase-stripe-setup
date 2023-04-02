import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { AuthProvider, FirebaseAppProvider, FirestoreProvider } from 'reactfire'
import { auth, db, firebaseConfig } from './firebase'

export const stripePromise = loadStripe(
  'pk_test_51MWsZ4EDS4Fe22X4qUoWAUVox3mqQKiBPe8s2HplhnIWHYJWJ3nvBLVDTH9zOpbUxPghBgRXPvN5ApOxZXUWWkq000QnX6BafU '
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthProvider sdk={auth}>
        <FirestoreProvider sdk={db}>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </FirestoreProvider>
      </AuthProvider>
    </FirebaseAppProvider>
  </React.StrictMode>
)
