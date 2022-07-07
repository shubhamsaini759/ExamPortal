import { configureStore } from "@reduxjs/toolkit";

import { SignupSlice } from "./SignupSlice";
import { LoginSlice } from "./LoginSlice";
import { AddStudentSlice } from "./AddStudentSlice";
import { CreateCourseSlice } from "./CreateCourseSlice";
import { AddSubjectSlice } from "./AddSubjectSlice";
import { LoaderSlice } from "./LoaderSlice";

export const signupAction = SignupSlice.actions;
export const loginAction = LoginSlice.actions;
export const addStudentAction = AddStudentSlice.actions;
export const createCourseAction = CreateCourseSlice.actions;
export const AddSubjectAction = AddSubjectSlice.actions;
export const LoaderAction = LoaderSlice.actions;

const store = configureStore({
    reducer : {
        signupReducer : SignupSlice.reducer,
        loginReducer : LoginSlice.reducer,
        addStudentReducer : AddStudentSlice.reducer,
        createCourseReducer : CreateCourseSlice.reducer,
        AddSubjectReducer : AddSubjectSlice.reducer,
        LoaderReducer : LoaderSlice.reducer
    }
})

export default store;