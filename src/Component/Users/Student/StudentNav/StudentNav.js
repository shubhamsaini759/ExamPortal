import React from 'react'
import './StudentNav.css'

import logo from '../../../../Assets/Global/U.png'

import LogoutIcon from '@mui/icons-material/Logout';

import { useNavigate } from 'react-router-dom';

const StudentNav = () => {
  const navigate = useNavigate();

  const logoutHandler = () =>{
    localStorage.removeItem('accessToken');
    console.log('hello')
    navigate('/');
  }


  return (
    <div className='student-nav'>
        <div className='student-nav-logo'>
            <div className='student-nav-icon'>
                <img src={logo} alt='logo' onClick={()=>navigate('/student/dashboard')} />
            </div>
            <div className='student-nav-logo-text'>
                <h2>University</h2>
                <p>Online exam</p>
            </div>    
        </div>
        <div className='student-nav-logout'>
              <LogoutIcon onClick={logoutHandler} />
        </div>

    </div>
  )
}

export default StudentNav