import { createSlice } from "@reduxjs/toolkit";

export const CreateCourseSlice = createSlice({
        name : 'create course',
        initialState : {
            name : '',
            description : ''
        },
        reducers : {
            CourseName(state,action){
                state.name =  action.payload.name
            },
            DiscriptionName(state,action){
                state.description = action.payload.description
            }
        }
})