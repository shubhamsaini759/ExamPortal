import React from 'react'
import './Signup.css'
import HomeNav from '../HomeGlobal/HomeNav/HomeNav'
import SignupTab from './SignupTab/SignupTab'
import AboutUni from '../HomeGlobal/AboutUni/AboutUni'
import HomeFooter from '../HomeGlobal/HomeFooter/HomeFooter'
import { useSelector } from 'react-redux'

import { CircularProgress } from '@mui/material'

const Signup = () => {
  const isLoadding = useSelector((state) => state.LoaderReducer.isLoading);

  return (
    <div>
      {isLoadding ? <div className='Loadder'> <CircularProgress /> </div> : (<div>

          <HomeNav />
          <SignupTab />
          <AboutUni />
          <HomeFooter />
      </div>)}

    </div>
  )
}

export default Signup