import React, { useState } from 'react'
import './ExamAllDetail.css'

import img from '../../../../../../Assets/Global/university.jpg'
import { Button } from '@mui/material'
import ExaminerNav from '../../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import { useLocation, useNavigate } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux'



const ExamAllDetail = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const Data = useSelector(state=> state.ViewExamReducer.examData)
    console.log(Data,'examAllDetail')
   


    

    const ModalHandler = () =>{
        navigate('/examiner/examdetail/quepaper',{state : {que : Data.questions}})
    }
  return (
    <>
    <ExaminerNav />
    <div className='exam-all'>
        <div className='exam-all-back'>
                <ArrowBackIcon /><p onClick={()=>navigate('/examiner/examdetails')}> Go Back</p>
            </div>
       
        <div className='exam-all-detail'>
            <div className='exam-all-img'>
                <img src={img} alt='img'/>
                <Button variant='outlined' sx={{color : '#4f3f39', mt: 6}} onClick={ModalHandler} >question Paper</Button>

            </div>

            <div className='exam-all-info'>
                <h4>Course Name : {Data.course}</h4>
                <h4>Subject Name : {Data.subject} </h4>
                <h5>Exam Date : {Data.examDate}</h5>
                <h5>Start Time : {Data.startTime}</h5>
                <h5>End Time : {Data.endTime}</h5>
            </div>
        </div>
        
        <table className='exam-all-student-list'>
            <tr className='list-heading'>
                <th>SNo.</th>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Contact</th>
            </tr>
    { Data.students.map((x,ind)=>

            <tr className='list-data'>
                <td>{ind + 1}</td>
                <td>{x.firstName} {x.lastName}</td>
                <td>{x.email}</td>
                <td>{x.mobileNumber}</td>
            </tr>
      )}

        </table>
      
    </div>
    </>
  )
}

export default ExamAllDetail