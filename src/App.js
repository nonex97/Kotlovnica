import React, { useState }  from 'react';
import './App.css';
import Data from './components/data';

import * as firebase from 'firebase/app';
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import {config} from './config/config';


function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signedIn, setSignedIn] = useState(false)


  const changeUserValue = (event) => {
    setUsername(event.target.value)
  }

  const changePassValue = (event) => {
    setPassword(event.target.value)
  }

  const signInUserPassword = () => {
    const user = {username}.username
    const pass = {password}.password
    firebase.auth().signInWithEmailAndPassword(user,pass)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        setError(err.message)
        console.error(err)
      })
    setUsername('')
    setPassword('')
    setError('')
  }

  let isSignedIn = {signedIn}.signedIn

  return (
   
    <FirebaseAuthProvider {...config} firebase={firebase}>

      <div>
        {isSignedIn ? (
          <div>
          <button
          onClick={() => {
            firebase.auth().signOut();
            setError('')
          }}
        >
          Sign Out
        </button>
          <Data/>
          </div>
        ) : (
          <div>
          <button
            onClick={signInUserPassword}
          >
            Sign In
          </button>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value = {username}
            onChange = {changeUserValue}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value = {password}
            onChange = {changePassValue}
          />
          <p>{error}</p>
          </div>
        )}
      </div>


      <FirebaseAuthConsumer>
      {({isSignedIn}) => {
        setSignedIn(isSignedIn)
      }}
    </FirebaseAuthConsumer>

    </FirebaseAuthProvider>
    
  );
}

export default App;
