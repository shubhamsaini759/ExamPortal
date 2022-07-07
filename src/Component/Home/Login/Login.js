import React from 'react'
import './Login.css'

import AboutUni from '../HomeGlobal/AboutUni/AboutUni'
import HomeFooter from '../HomeGlobal/HomeFooter/HomeFooter'
import HomeNav from '../HomeGlobal/HomeNav/HomeNav'
import LoginTab from './LoginTab/LoginTab'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'

const Login = () => {
  const isLoadding = useSelector((state) => state.LoaderReducer.isLoading);

  return (
    <>
    {isLoadding ? <div className='Loadder'> <CircularProgress /> </div> : (<div>
        <HomeNav />
        <LoginTab />
        <AboutUni />
        <HomeFooter />
    </div>)}
    </>
  )
}

export default Login