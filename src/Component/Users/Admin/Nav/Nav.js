import React from 'react'
import './Nav.css'

import logo from '../../../../Assets/Global/U.png'

import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';


const Nav = () => {

    const navigate = useNavigate();

    const logoutHandler = () =>{
      localStorage.removeItem('accessToken')
      navigate('/')
    }


  return (
    <div className='nav'>
        <div className='nav-logo'>
            <div className='nav-icon'>
               <Tooltip title="Home Page" placement="bottom-end">
                  <img src={logo} alt='logo' onClick={()=>navigate('/admin')} />
                </Tooltip>
            </div>
            <div className='nav-logo-text'>
                <h2>University</h2>
                <p>Online exam</p>
            </div>    
        </div>
        <div className='nav-logout'>
        <Tooltip title="Logout" placement="bottom-end">
              <LogoutIcon onClick={logoutHandler} />
        </Tooltip>
        </div>

    </div>
  )
}

export default Nav