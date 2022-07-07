import React from 'react'
import './HomeNav.css'

import logo from '../../../../Assets/Global/U.png'


const HomeNav = () => {



  return (
    <div className='global-nav'>
        <div className='global-nav-logo'>
              <div className='global-nav-logo-icon'>
                  <img src={logo} alt='Logo-img' />
              </div>
              <div className='global-nav-logo-text'>
                  <h2>University</h2>
                  <p>Online exam</p>
              </div>
        </div>
        

    </div>
  )
}

export default HomeNav