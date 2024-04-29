import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/Provider';

const MyArtCraft = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    useEffect(()=>{
        fetch(`http://localhost:5000/mycart/${user?.email}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[user])
    return (
        <div>
            
        </div>
    );
};

export default MyArtCraft;