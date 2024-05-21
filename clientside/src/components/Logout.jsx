import React, { useContext } from 'react'

import { Authcontext } from '../contects/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {

    const {logout} = useContext(Authcontext);
    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || "/";
    const handleLogout = () =>{
        logout().then(() =>{
            alert("logout successfull");
            navigate(from,{replace:true})
        }).catch((e) =>{
            
        });
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
