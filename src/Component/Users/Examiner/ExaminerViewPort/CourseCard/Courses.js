import React, { useState } from 'react'
import './Courses.css'


import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DeleteIcon from '@mui/icons-material/Delete';

import img from '../../../../../Assets/Global/student2.jpg'
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom'
import DeleteAlert from './CourseDelete/DeleteAlert';



const Courses = (props) => {

      const navigate = useNavigate();

      

  return (

    <div className='course'>
        <div className='course-heading'>
                <h2>Courses</h2>
        </div>


        <div className='course-form'>
        { props.courses.map((x)=>

            <div className='course-card'>
                <div className='course-card-top'>
                    <div className='course-card-img'>
                        <img src={img} alt='image' />
                    </div>
                    <div className='course-card-dlt'>
                        {/* <DeleteIcon onClick={deleteHandler} /> */}
                        <DeleteAlert setRefresh={props.setRefresh} courseID={x._id} />
                    </div>
              </div>
              <div className='course-card-text'>
                  <h3>{x.name}</h3>
                  <p> {x.description} </p>
              </div>
              <div className='course-card-icons'>
                  <Tooltip title="Add Student" placement="bottom-end">
                        <PersonAddAlt1Icon className='AddPerson' sx={{ fontSize : 30,m : 2,color : '#4f3f39' }} onClick={()=>navigate('/examiner/addstudent',{state : {courseId : x._id}})}  /> 
                  </Tooltip>

                  <Tooltip title="Student List" placement="bottom-end">
                        <PeopleAltIcon className='ViewPerson' sx={{ fontSize : 30,m : 2,color : '#4f3f39'}} onClick={()=>navigate('/examiner/studentlist',{state : {courseId : x._id}})}  /> 
                  </Tooltip>
                  <Tooltip title="Add Subject" placement="bottom-end">
                        <BookmarkAddIcon className='AddSubject' sx={{ fontSize : 30,m : 2,color : '#4f3f39'}} onClick={()=>navigate('/examiner/addsubject',{state : {courseId : x._id}})} /> 
                  </Tooltip>
                  <Tooltip title="Subject List" placement="bottom-end">
                        <LibraryBooksIcon className='ViewSubject' sx={{ fontSize : 30,m : 2,color : '#4f3f39'}} onClick={()=>navigate('/examiner/subjectlist',{state : {courseId : x._id}})} /> 
                  </Tooltip>
              </div>
            </div>
        )}

        </div>
    </div>
  )
}

export default Courses