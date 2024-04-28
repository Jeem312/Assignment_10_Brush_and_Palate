import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Compnents/Firebase/firebase.config';
export const AuthContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };

      const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(email,password);
      };
      const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
          })};
      const logOut=()=>{
        setUser(null);
        signOut(auth);
        

      }
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            setLoading(false);
          }
          
        });
        return () => unsubscribe();
      }, []);
    const allInfo = {
        updateUserProfile,
           loading,
          createUser,
          logIn,
          user,
          logOut ,   }
    return (
      <AuthContext.Provider value={allInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default Provider;