import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5_zk4gW_S8oettWaCzsqlqb_arXh8SXE",
  authDomain: "buy-big.firebaseapp.com",
  projectId: "buy-big",
  storageBucket: "buy-big.appspot.com",
  messagingSenderId: "331769676798",
  appId: "1:331769676798:web:0c5057655403625c64f6af",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
