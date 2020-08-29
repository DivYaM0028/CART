import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPwUULemeaHnzhMaNTIjLZmaRhFo5uiRg",
  authDomain: "cart-aa8ff.firebaseapp.com",
  databaseURL: "https://cart-aa8ff.firebaseio.com",
  projectId: "cart-aa8ff",
  storageBucket: "cart-aa8ff.appspot.com",
  messagingSenderId: "315684662655",
  appId: "1:315684662655:web:3ccf0e73626f0498ce7e4a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
