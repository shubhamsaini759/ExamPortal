import React from 'react'
import './SignupTab.css'

import { useDispatch, useSelector } from 'react-redux'
import { signupAction } from '../../../../Store/Index'
import { LoaderAction } from '../../../../Store/Index';


import { Button, TextField } from '@mui/material'
// import { NavLink } from 'react-router-dom'

import api from '../../../../Utils/api'
import { useNavigate } from 'react-router-dom';


const SignupTab = () => {

  const navigate = useNavigate();

  const signupData = useSelector((state)=>state.signupReducer)
  const dispatch = useDispatch();

  const firstNameEntered = (e) =>{
    dispatch(signupAction.firstName({firstName : e.target.value}))
    }   
    const lastNameEntered = (e) =>{
        dispatch(signupAction.lastName({lastName : e.target.value}))
    }

  const emailEntered = (e) =>{
          dispatch(signupAction.emailSignup({email : e.target.value}))
  }
  const passEntered = (e) =>{
      dispatch(signupAction.passSignup({pass : e.target.value}))
  }
  const mobileEntered = (e) =>{
    dispatch(signupAction.mobileSignup({mobile : e.target.value}))
}
  const userSignup = (e) =>{
      e.preventDefault();
      dispatch(LoaderAction.loadingHandler());

      api
        .post('/register',signupData)
        .then((result)=>{console.log(result) 
                      alert('signUp Succesfull')
                     dispatch(LoaderAction.loadingHandler());
                     navigate('/');
        
        } )
        .catch((err)=>{console.log(err.response.data.message)
                          dispatch(LoaderAction.loadingHandler());


        })

  }

  return (
    <div className='signup-tab'>
        <div className='signup-tab-data'>
            <form className='signup-tab-data-input' onSubmit={userSignup}>
                <TextField variant='outlined' sx={{width: 300, pb: 3,mt: 6}} label='First-Name' onChange={firstNameEntered}  />
                <TextField variant='outlined' sx={{width: 300, pb: 3}} label='Last-Name' onChange={lastNameEntered} />
                <TextField variant='outlined' sx={{width: 300, pb: 3}} label='Email' onChange={emailEntered} />
                <TextField variant='outlined' sx={{width: 300, pb: 3}} label='mobile-number' onChange={mobileEntered} />
                <TextField variant='outlined' sx={{width: 300, pb: 3}} label='Password' onChange={passEntered} />
                <Button variant='contained'  sx={{width: 200 }} type='submit' >SignUp</Button>
                
            </form>
           
        </div>

    </div>
  )
}

export default SignupTab