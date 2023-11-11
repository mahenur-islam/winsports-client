import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();

    console.log(loading);
    //wait to load user first 
    if(loading){
        return   <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example"  size='xl'/>
      </div>
    }
    //check email
    if(!user?.email){
        return <Navigate to='/login'/>
    }
    return children
};

export default PrivateRoute;