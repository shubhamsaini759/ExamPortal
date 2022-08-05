import React from 'react'
import './UserNav.css'

import logo from '../../../Assets/Global/U.png'

import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';


const UserNav = () => {

    const navigate = useNavigate();

    const logoutHandler = () =>{
      localStorage.removeItem('accessToken')
      navigate('/')
    }


  return (
    <div className='admin-nav'>
        <div className='admin-nav-logo'>
            <div className='admin-nav-icon'>
                <img src={logo} alt='logo' />
            </div>
            <div className='admin-nav-logo-text'>
                <h2>University</h2>
                <p>Online exam</p>
            </div>    
        </div>
        <div className='admin-nav-logout'>
          <Tooltip title="Logout" placement="bottom-end">
                <LogoutIcon onClick={logoutHandler} />
          </Tooltip>
        </div>

    </div>
  )
}

export default UserNav