import { createSlice } from "@reduxjs/toolkit";

export const ExamQueSlice = createSlice({
        name : 'Exam questions',
        initialState : {
            question : '',
            options : ['','','',''],
            correctOption : '',
            marks : ''
        },
        reducers : {
            AddQue(state,action){
                state.question = action.payload.que
            },
            AddOne(state,action){
                state.options[0]  = action.payload.one
            },
            AddTwo(state,action){
                state.options[1]  = action.payload.two

            },
            AddThree(state,action){
                state.options[2]  = action.payload.three

            },
            AddFour(state,action){
                state.options[3]  = action.payload.four

            },
            AddCorrect(state,action){
                state.correctOption = action.payload.correct
            },
            AddMarks(state,action){
                state.marks = action.payload.marks
            }
        }

})