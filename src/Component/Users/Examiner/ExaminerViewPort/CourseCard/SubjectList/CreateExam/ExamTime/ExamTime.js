import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ExamTime = () => {
    const navigate = useNavigate();
    
  return (
    <div className='exam-time'>
        <div className='exam-time-inputs'>
           <p>Exam Date :</p> <input type='date' />
           <p>Exam Time :</p> <input type='time' />
           <p>Exam Time :</p><input type='time' />
        </div>
        <div className='exam-time-btn'>
            <Button variant='contained' sx={{mt:5}} onClick={()=>navigate('/examiner/subjectlist/exam/questions')}>Next</Button>

        </div>

    </div>
  )
}

export default ExamTime