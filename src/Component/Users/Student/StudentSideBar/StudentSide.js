import React from 'react'
import './StudentSide.css'

import user from '../../../../Assets/Global/university.jpg'



import ReceiptIcon from '@mui/icons-material/Receipt';
import FeedIcon from '@mui/icons-material/Feed';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const StudentSide = (props) => {

    const navigate = useNavigate();

  return (
    <div className='student-side'>
        
            <div className='student-side-detail'>
                <div className='student-side-image'>
                        <img src={user} alt='userprofile' />
                </div>  
                <div className='student-side-data'>
                        <h4>{props.student.firstName} {props.student.lastName}</h4>
                        <p>{props.student.email}</p>
                </div>
            </div>
        <div className='student-side-dashboard'>
            <p onClick={()=>navigate('/student/dashboard')}>DASHBOARDS</p>
            <div className='studentdashboard-btn'>
                <div className='student-dashboard-user'>
                    <div className='student-request-icon'>
                        <ReceiptIcon />
                        <Button  variant="text" onClick={()=>navigate('/student/viewexam')} >Exam Details</Button>
                    </div>
                    <div className='student-approved-icon'>
                        <FeedIcon />
                        <Button  variant="text" onClick={()=>navigate('/student/result')} >Results</Button>
                    </div>
                    <div className='student-record-icon'>
                        <FeedIcon />
                        <Button  variant="text" onClick={()=>navigate('/student/examrecords')} >Exam Records</Button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentSide