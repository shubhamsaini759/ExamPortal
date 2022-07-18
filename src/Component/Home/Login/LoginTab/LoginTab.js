import React from 'react';
import './LoginTab.css';

import { useDispatch,useSelector } from 'react-redux'
import { LoaderAction, loginAction } from '../../../../Store/Index';

import { Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';

import api from '../../../../Utils/api'
import {useNavigate} from 'react-router-dom'

import { toast } from 'react-toastify'



const LoginTab = () => {


  const loginD = useSelector((state)=> state.loginReducer);

  const loginData = {email: loginD?.email, password: loginD?.password}

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const emailHandler = (e) =>{
        dispatch(loginAction.EnteredEmail({email : e.target.value}))
    }
    const passHandler = (e) =>{
        dispatch(loginAction.EnetredPassword({pass : e.target.value}))
    }
    const userLogin = (e) =>{
        e.preventDefault();
        dispatch(LoaderAction.loadingHandler());
        api 
          .post('/login',loginData)
          .then((result)=>{toast(result.data.message)
                            localStorage.setItem("accessToken",result.data.data.accessToken)
                            dispatch(loginAction.loginHandler());
                            dispatch(LoaderAction.loadingHandler());

                            if(result.data.data.userType === "ADMIN") {
                              navigate('/admin');
                            }else if(result.data.data.userType === "EXAMINER"){
                              navigate('/examiner/dashboard');
                            }else if(result.data.data.userType === "STUDENT"){
                              navigate('/student/dashboard')
                            }
          })
          .catch((err)=>{
            console.log(err,"error");
            dispatch(LoaderAction.loadingHandler());

          })
  
    }

    

  return (
    <>
        <div className='login-tab'>
            <div className='login-tab-data'>
                <form onSubmit={userLogin} className='login-tab-data-input'>
                    <TextField variant='outlined' 
                                sx={{width: 300, pb: 3, mt:20}} 
                                label='Email' name='userEmail' 
                                onChange={emailHandler} 
                    />
                    <TextField variant='outlined' 
                                sx={{width: 300, pb: 3}} 
                                label='Password' 
                                name='userPassword' 
                                onChange={passHandler} 
                    />
                    <Button variant='contained'  
                                                  sx={{width: 200, }}
                                                  type='submit'  
                                                  
                                          > login 
                    </Button>
                  
                    
                </form>
                <div className='login-tab-data-info'>
                    <p className='forgot'>Forgot <span>Password</span>...?</p>
                    <p className='create-account'>Create An Account...<NavLink to='/signup'><span>SignUp</span></NavLink></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginTab;