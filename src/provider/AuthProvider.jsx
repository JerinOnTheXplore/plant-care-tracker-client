import React, { createContext, useEffect, useState } from 'react';
import {app} from "../firebase/firebase.init.js"
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
const auth = getAuth(app);

const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null);
   const [loading,setLoading] = useState(true);

const createUser = (email,password) => {
   setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password);
};

const signIn = (email,password) =>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password);
}

const updateUser = (updatedData) =>{
  return updateProfile(auth.currentUser,updatedData);
};


   useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    }
   },[]);

   const authData = {
    user,
    setUser,
    loading,
    createUser,
    signIn,
    updateUser,
    setLoading,


   }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;