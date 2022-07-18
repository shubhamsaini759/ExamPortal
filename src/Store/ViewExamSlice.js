import { createSlice } from "@reduxjs/toolkit";

export const ViewExamSlice = createSlice({
    name : 'view Exam',
    initialState : {
        examData : {}
    },
    reducers : {
        ExamInfo(state,action){
            state.examData = action.payload.info
        }
    }
})