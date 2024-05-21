import React, {  createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateCurrentUser, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {  signInWithEmailAndPassword,signOut  } from "firebase/auth";

export const Authcontext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const[user , setUser] = useState(null);
    const[loading ,setLoading] = useState(true);

    const createUser =(email,password) => {
       setLoading(true); 
       return createUserWithEmailAndPassword(auth , email,password)
    }

    const loginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth , googleProvider)
    } 

    const logout = () => {
      return signOut(auth)
    }

    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth , CurrentUser => {
        setUser(CurrentUser)
        setLoading(false)
      });
      return () => {
        return unsubscribe();
      }
    },[])

    const login = (email , password) => {
      setLoading(true);

      return signInWithEmailAndPassword(auth,email,password);
    }
   
    const authInfo ={
        user,
        createUser,
        loginWithGoogle,
        loading,
        login,
        logout
    }
  return (
    <Authcontext.Provider value={authInfo}>
        {children}
    </Authcontext.Provider>
  )
}

export default AuthProvider
