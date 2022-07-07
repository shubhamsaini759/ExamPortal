import { createSlice } from "@reduxjs/toolkit";

export const AddSubjectSlice = createSlice({
        name : 'add subject',
        initialState : {
            subjectOne : { name : '' , courseID: ' '},
            subjectTwo : { name : '' , courseID: ' '},
            subjectThree : { name : '' , courseID: ' '},
            subjectFour : { name : '' , courseID: ' '},
            subjectFive : { name : '' , courseID: ' '},
        },
        reducers : {
            OneSubject(state,action){
                state.subjectOne = { name : action.payload.name, courseID: action.payload.courseID}
            },
            TwoSubject(state,action){
                state.subjectTwo = { name : action.payload.name, courseID: action.payload.courseID}
                
            },
            ThreeSubject(state,action){
                state.subjectThree = { name : action.payload.name, courseID: action.payload.courseID}
                
            },
            FourSubject(state,action){
                state.subjectFour = { name : action.payload.name, courseID: action.payload.courseID}
                
            },
            FiveSubject(state,action){
                state.subjectFive = { name : action.payload.name, courseID: action.payload.courseID}
                
            }
            
            
        }
})