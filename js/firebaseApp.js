// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8fJrprUgps-jTmTEyY5Fiszg4n_CQblI",
  authDomain: "myguide-ff65d.firebaseapp.com",
  databaseURL: "https://myguide-ff65d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myguide-ff65d",
  storageBucket: "myguide-ff65d.appspot.com",
  messagingSenderId: "914293441355",
  appId: "1:914293441355:web:41cd9cb9a1a04b68a7dece",
  measurementId: "G-QQPEC6938Q"
};

var verificationId, verificationCode;

firebase.initializeApp(firebaseConfig);
  
var db = firebase.firestore();