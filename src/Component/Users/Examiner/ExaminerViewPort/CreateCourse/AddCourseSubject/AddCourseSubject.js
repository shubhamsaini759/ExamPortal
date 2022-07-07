import { Button, TextField } from "@mui/material";
import React from "react";
import ExaminerNav from "../../NavExaminerGlobal/AddStudentNav/ExaminerNav";
import "./AddCourseSubject.css";

import { AddSubjectAction } from "../../../../../../Store/Index";
import { useDispatch } from "react-redux/es/exports";

import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux/es/exports";
import api from "../../../../../../Utils/api";

import { toast } from "react-toastify";


const AddCourseSubject = (props) => {

  const navigate = useNavigate();
  const location = useLocation();
  const subjectDetail = useSelector((state)=> state.AddSubjectReducer)

  const dispatch = useDispatch();

    const oneHandler = (e) =>{
        dispatch(AddSubjectAction.OneSubject( {name : e.target.value, courseID : location.state.courseId }) )
    }
    const twoHandler = (e) =>{
      dispatch(AddSubjectAction.TwoSubject( {name : e.target.value, courseID : location.state.courseId}) )
    }
    const threeHandler = (e) =>{
      dispatch(AddSubjectAction.ThreeSubject( {name : e.target.value, courseID : location.state.courseId}) )
    }
    const fourHandler = (e) =>{
      dispatch(AddSubjectAction.FourSubject({ name : e.target.value, courseID : location.state.courseId}) )
    }
    const fiveHandler = (e) =>{
      dispatch(AddSubjectAction.FiveSubject({ name : e.target.value, courseID : location.state.courseId}) )
    }
    

    const AddSubjectHandler = (e) =>{
        e.preventDefault();
        
      let Arr = [];
        for (const key in subjectDetail) {
            const element = subjectDetail[key];
            if(element.name){
              Arr.push(element);
            }
        }

        api
          .post('/examiner/subjects',{subjects:Arr},{headers : { Authorization : `${ localStorage.getItem('accessToken')}`}})
          .then((result)=>{
                toast(result.data.message);
                navigate('/examiner/dashboard')
          })
          .catch((err)=>console.log(err,'addSubjects'))
    }



  return (
    <>
      <ExaminerNav />
      <div className="course-subject">
        <div className="course-subject-heading">
          <h2>Add Subjects</h2>
        </div>
        <div className="course-subject-inputs">
          <form
            className="course-subject-inputs-form"
            onSubmit={AddSubjectHandler}
          >
            <TextField
              id="standard-basic"
              label="Subject-1"
              variant="standard"
              sx={{ mb: 2 }}
              onChange={oneHandler}
            />
            <TextField
              id="standard-basic"
              label="Subject-2"
              variant="standard"
              sx={{ mb: 2 }}
              onChange={twoHandler}

            />
            <TextField
              id="standard-basic"
              label="Subject-3"
              variant="standard"
              sx={{ mb: 2 }}
              onChange={threeHandler}

            />
            <TextField
              id="standard-basic"
              label="Subject-4"
              variant="standard"
              sx={{ mb: 2 }}
              onChange={fourHandler}

            />
            <TextField
              id="standard-basic"
              label="Subject-5"
              variant="standard"
              sx={{ mb: 2 }}
              onChange={fiveHandler}

            />
            
            <Button variant="contained" type="submit">
              Add
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCourseSubject;
