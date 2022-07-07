import React from 'react'
import './ExaminerNav.css'

import logo from '../../../../../../Assets/Global/U.png'

import LogoutIcon from '@mui/icons-material/Logout';

import { useNavigate } from 'react-router-dom';

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
                <img src={logo} alt='logo' onClick={()=>navigate('/examiner/dashboard')} />
            </div>
            <div className='addStudent-nav-logo-text'>
                <h2>University</h2>
                <p>Online exam</p>
            </div>    
        </div>
        <div className='addStudent-nav-logout'>
              <LogoutIcon onClick={logoutHandler} />
        </div>

    </div>
  )
}

export default ExaminerNav