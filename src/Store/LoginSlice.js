import { createSlice } from "@reduxjs/toolkit";


export const LoginSlice = createSlice({

            
                name : 'Login',
                initialState : {
                    email : '',
                    password : '',
                    isLoggedIn : false
                },
                reducers : {
                    EnteredEmail(state,action){
                        state.email = action.payload.email;
                    },
                    EnetredPassword(state,action) {
                        state.password = action.payload.pass;
                    },
                    loginHandler(state) {
                        state.isLoggedIn = true;
                    }
                    
                }
})