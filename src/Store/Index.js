import { configureStore } from "@reduxjs/toolkit";

import { SignupSlice } from "./SignupSlice";
import { LoginSlice } from "./LoginSlice";
import { AddStudentSlice } from "./AddStudentSlice";
import { CreateCourseSlice } from "./CreateCourseSlice";
import { AddSubjectSlice } from "./AddSubjectSlice";
import { LoaderSlice } from "./LoaderSlice";
import { ExamTimeSlice } from "./ExamTimeSlice";
import { ExamQueSlice } from "./ExamQueSlice";
import { ExamStudentSlice } from "./ExamStudentSlice";
import { ViewExamSlice } from "./ViewExamSlice";

export const signupAction = SignupSlice.actions;
export const loginAction = LoginSlice.actions;
export const addStudentAction = AddStudentSlice.actions;
export const createCourseAction = CreateCourseSlice.actions;
export const AddSubjectAction = AddSubjectSlice.actions;
export const LoaderAction = LoaderSlice.actions;
export const ExamTimeAction = ExamTimeSlice.actions;
export const ExamQueAction = ExamQueSlice.actions;
export const ExamStudentAction = ExamStudentSlice.actions;
export const ViewExamAction =  ViewExamSlice.actions;


const store = configureStore({
    reducer : {
        signupReducer : SignupSlice.reducer,
        loginReducer : LoginSlice.reducer,
        addStudentReducer : AddStudentSlice.reducer,
        createCourseReducer : CreateCourseSlice.reducer,
        AddSubjectReducer : AddSubjectSlice.reducer,
        LoaderReducer : LoaderSlice.reducer,
        ExamTimeReducer : ExamTimeSlice.reducer,
        ExamQueReducer : ExamQueSlice.reducer,
        ExamStudentReducer : ExamStudentSlice.reducer,
        ViewExamReducer : ViewExamSlice.reducer,

    }
})

export default store;