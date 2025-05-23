import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const handleregister = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    };




    const userInfo = {
       handleregister,
       user,
       setUser
    }

    return (
         <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;
