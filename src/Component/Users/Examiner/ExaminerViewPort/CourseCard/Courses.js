import React from 'react'
import './Courses.css'


import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import img from '../../../../../Assets/Global/student2.jpg'

import { useNavigate } from 'react-router-dom'

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
              <div className='course-card-img'>
                  <img src={img} alt='image' />
              </div>
              <div className='course-card-text'>
                  <h3>{x.name}</h3>
                  <p> {x.description} </p>
              </div>
              <div className='course-card-icons'>
                  <PersonAddAlt1Icon className='AddPerson' sx={{ fontSize : 30,m : 2,color : '#4f3f39' }} onClick={()=>navigate('/examiner/addstudent',{state : {courseId : x._id}})}  /> 
                  <PeopleAltIcon className='ViewPerson' sx={{ fontSize : 30,m : 2,color : '#4f3f39'}} onClick={()=>navigate('/examiner/studentlist',{state : {courseId : x._id}})}  /> 
                  <BookmarkAddIcon className='AddSubject' sx={{ fontSize : 30,m : 2,color : '#4f3f39'}} onClick={()=>navigate('/examiner/addsubject',{state : {courseId : x._id}})} /> 
                  <LibraryBooksIcon className='ViewSubject' sx={{ fontSize : 30,m : 2,color : '#4f3f39'}} onClick={()=>navigate('/examiner/subjectlist',{state : {courseId : x._id}})} /> 
              </div>
            </div>
        )}

        </div>
    </div>
  )
}

export default Courses