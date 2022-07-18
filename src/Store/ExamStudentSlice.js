import { createSlice } from "@reduxjs/toolkit";

export const ExamStudentSlice = createSlice({
            name : 'Exam students',
            initialState : {
                students : [],
            },
            reducers : {
                AddStudent(state,action){
                    state.students.push(action.payload.student)
                }
            }
})