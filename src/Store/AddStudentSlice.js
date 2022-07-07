import { createSlice  } from "@reduxjs/toolkit";

export const AddStudentSlice = createSlice({
            name: 'addstudent',
            initialState : {
                firstName : '',
                lastName : '',
                email : '',
                password : '',
                mobileNumber : '',
                fatherName : '',
                motherName : '',
                dob : '',
                address : '',
                city : '',
                state : '',
                gender : '',

            },
            reducers : {
                EnteredfName(state,action){
                    state.firstName = action.payload.fname
                },
                EnteredlName(state,action){
                    state.lastName = action.payload.lname
                },
                EnteredEmail(state,action){
                    state.email = action.payload.email
                },
                EnteredPassword(state,action){
                    state.password = action.payload.password
                },
                EnteredMobile(state,action){
                    state.mobileNumber = action.payload.mobile
                },
                EnteredFather(state,action){
                    state.fatherName = action.payload.father
                },
                EnteredMother(state,action){
                    state.motherName = action.payload.mother
                },
                EnteredDob(state,action){
                    state.dob = action.payload.dob
                },
                EnteredAddress(state,action){
                    state.address = action.payload.address
                },
                EnteredCity(state,action){
                    state.city = action.payload.city
                },
                EnteredState(state,action){
                    state.state = action.payload.state
                },
                EnteredGender(state,action){
                    state.gender = action.payload.gender
                }
            }

})