import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if(!user){
        return<Navigate to ='/signin' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;