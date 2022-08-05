import React from 'react'
import './ExaminerNav.css'

import logo from '../../../../../../Assets/Global/U.png'

import LogoutIcon from '@mui/icons-material/Logout';

import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const ExaminerNav = () => {
  const navigate = useNavigate();

  const logoutHandler = () =>{
    localStorage.removeItem('accessToken');
    console.log('hello')
    navigate('/');
  }


  return (
    <div className='addStudent-nav'>
        <div className='addStudent-nav-logo'>
            <div className='addStudent-nav-icon'>
              <Tooltip title="Home Page" placement="bottom-end">
                  <img src={logo} alt='logo' onClick={()=>navigate('/examiner/dashboard')} />
              </Tooltip>
            </div>
            <div className='addStudent-nav-logo-text'>
                <h2>University</h2>
                <p>Online exam</p>
            </div>    
        </div>
        <div className='addStudent-nav-logout'>
          <Tooltip title="Logout" placement="bottom-end">
              <LogoutIcon onClick={logoutHandler} />
          </Tooltip>
        </div>
        

    </div>
  )
}

export default ExaminerNav