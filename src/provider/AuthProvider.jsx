import React, { createContext, useEffect, useState } from 'react';
import {  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../config/firebase.config'




export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
//google log in with pop-up

const googleLogIn = () =>{
    setLoading(true);
  return  signInWithPopup(auth, googleProvider)
}


//create user 
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

//sign in with email and password
const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

//logout user
const logOut = ()=>{
    return signOut(auth)
}
//using observer onAuthStateChange 
 useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    });
    return () => { 
        unSubscribe();
    }
 }, []);

 console.log(user);

const info = {
    googleLogIn,
    createUser,
    signIn,
    logOut,
    user,
    loading
}



    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;