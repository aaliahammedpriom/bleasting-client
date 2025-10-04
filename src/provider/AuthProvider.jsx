import React, { createContext, useState } from 'react';
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.jpg";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [manubar , setMenubar] = useState(false)

    const authInfo = {
        logo,logo2,
        manubar , setMenubar
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;