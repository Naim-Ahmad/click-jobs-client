import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import auth from '../config/firebase.config'


export const AuthContext = createContext(null)

export default function AuthProvider({children}) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const signUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (name, photoURL)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    const continueWithGoogle = ()=> {
        setLoading(true)
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            setUser(user)
            setLoading(false)
        })
        return ()=> unsubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        signIn,
        logout,
        signUp,
        updateProfile,
        continueWithGoogle,
        updateUserInfo
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}