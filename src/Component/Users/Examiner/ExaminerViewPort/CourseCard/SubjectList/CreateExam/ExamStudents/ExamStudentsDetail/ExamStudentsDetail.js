import React, { useState } from 'react'
import './ExamStudentsDetail.css'
import DoneIcon from '@mui/icons-material/Done';

import img from '../../../../../../../../../Assets/Global/laptop.jpg'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ExamStudentsDetail = () => {

    const navigate = useNavigate();

    const [ check, setCheck ] = useState(false);

    const checkHandler = () =>{
        setCheck(true)
    }

  return (
    <div className='exam-student'>
        <div className='exam-student-done'>
            <Button variant='contained' onClick={()=>navigate('/examiner/dashboard')} >Done</Button>
        </div>
        <div className='exam-student-heading'>
            <h2>Students List</h2>
        </div>
        <div className='exam-student-detail'>
            <div className='exam-student-detail-data'>
                <div className='exam-student-detail-img'>
                    <img src={img} alt='img' /> 
                </div>
                <div className='exam-student-detail-info'>
                    <h4>student name</h4>
                    <p>student@gmail.com</p>
                </div>
            </div>
            <div className='exam-student-detail-btn'>
                { !check ? <Button variant='outlined' onClick={checkHandler}>ADD</Button> : <DoneIcon /> }
            </div>
          
        </div>

    </div>
  )
}

export default ExamStudentsDetail