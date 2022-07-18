import { createSlice } from "@reduxjs/toolkit";

export const ExamTimeSlice = createSlice({
        name : 'Exam Time',
        initialState :{
            examDate : '',
            startTime : '',
            endTime : '',
            duration : '',
            accessCode : '',
            subjectID : '',
            
        },
        reducers :{
            AddDate(state,action){
                state.examDate = action.payload.date
            },
            AddStart(state,action){
                state.startTime = action.payload.start
            },
            AddEnd(state,action){
                state.endTime = action.payload.end
            },
            AddDuration(state,action){
                state.duration = action.payload.duration
            },
            AddAccess(state,action){
                state.accessCode = action.payload.access
            },
            AddID(state,action){
                state.subjectID = action.payload.subjectID
            }

        }
})