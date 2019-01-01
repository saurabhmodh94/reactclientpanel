import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

// Reducers

const firebaseConfig = {
  apiKey: 'AIzaSyDGNZVlaFNnI5veHt5n9XeJExS8ySHyKjQ',
  authDomain: 'reactclientpanel-bec06.firebaseapp.com',
  databaseURL: 'https://reactclientpanel-bec06.firebaseio.com',
  projectId: 'reactclientpanel-bec06',
  storageBucket: 'reactclientpanel-bec06.appspot.com',
  messagingSenderId: '704393820395'
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
