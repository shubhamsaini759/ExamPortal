import { Button, TextField } from '@mui/material'
import React from 'react'
import './CreateCourse.css'

import { useSelector,useDispatch } from 'react-redux'
import { createCourseAction } from '../../../../../Store/Index'
import api from '../../../../../Utils/api'

import { useNavigate } from 'react-router-dom'

const CreateCourse = () => {

    const navigate = useNavigate();
    
    const courseDetail = useSelector((state)=> state.createCourseReducer)

    const dispatch = useDispatch();

    const CourseHandler = (e) =>{
        dispatch( createCourseAction.CourseName({ name : e.target.value}))
    }
    const DescriptionHandler = (e) =>{
        dispatch( createCourseAction.DiscriptionName({ description : e.target.value}))

    }
    const CreateCourse = (e) =>{
        e.preventDefault();
        api 
            .post('/examiner/createCourse',courseDetail,{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=> {
                                alert(result.data.message);
                                navigate('/examiner/coursesubject',{state : {courseId : result.data.data.course._id}});
                            })
            .catch((err)=> console.log(err,'create course'))
    }



  return (
    <>  

        <div className='create-course'>
            <div className='create-course-heading'>
                <h2>Create Course</h2>
            </div>
            <div className='create-course-details'>
                <form className='create-course-details-data' onSubmit={CreateCourse}>
                    <TextField id="standard-basic" label="Course-Name" variant="standard" sx={{width:300, m : 'auto',mb:4,mt:6}} onChange={CourseHandler} />
                    <TextField id="standard-basic" label="Description" variant="standard" sx={{width:300, m : 'auto',mb:4}} onChange={DescriptionHandler} />
                    <Button variant='contained' sx={{width:150,m : 'auto'}} type='submit' >Add Course</Button>
                </form>
            </div>

        </div>
    </>
  )
}

export default CreateCourse