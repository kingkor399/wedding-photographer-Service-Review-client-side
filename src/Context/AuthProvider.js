import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const Provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleProvider  = () =>{
        return signInWithPopup(auth, Provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = { user, loading, createUser, loginUser, logOut, GoogleProvider}

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubcribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;