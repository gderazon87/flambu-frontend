import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCpIXY5HO6DuDe77gzZPOi4NDGFAKZsajw",
    authDomain: "flambu-246a2.firebaseapp.com",
    projectId: "flambu-246a2",
    storageBucket: "flambu-246a2.appspot.com",
    messagingSenderId: "295204702405",
    appId: "1:295204702405:web:e4b75cda4fd540aad588ac",
    measurementId: "G-6XWFS3W2J8"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
auth.signInAnonymously()

const categoryCollection = db.collection('categories')
const itemCollection = db.collection('items')
const reviewCollection = db.collection('itemReviews')
const ownerReviewCollection = db.collection('itemOwnerReviews')

// export utils/refs
export {
  db,
  auth,
  categoryCollection,
  itemCollection,
  reviewCollection,
  ownerReviewCollection
}