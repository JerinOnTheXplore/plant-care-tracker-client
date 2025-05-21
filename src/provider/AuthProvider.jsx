import React, { createContext, useEffect, useState } from 'react';
import {app} from "../firebase/firebase.init.js"
export const AuthContext = createContext();
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(app);

const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null);
   const [loading,setLoading] = useState(true);


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
    loading
   }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;