import  { createSlice } from '@reduxjs/toolkit'

export const SignupSlice = createSlice({
    name : 'Signup',
    initialState : {
            firstName : '',
            lastName : '',
            email : '',
            mobileNumber : '',
            password : '',
    },
    reducers : {
        firstName(state,action){
            state.firstName = action.payload.firstName
        },
        lastName(state,action){
            state.lastName = action.payload.lastName
        },
        emailSignup(state,action){
                state.email = action.payload.email;
        },
        mobileSignup(state,action){
            state.mobileNumber = action.payload.mobile;
        },
        passSignup(state,action){ 
            state.password = action.payload.pass;
        },
       

    }
})