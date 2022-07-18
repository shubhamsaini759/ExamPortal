import { Button, TextField } from '@mui/material'
import React from 'react'
import './ExamTime.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { ExamTimeAction } from '../../../../../../../../Store/Index';

const ExamTime = (props) => {
    const navigate = useNavigate();

    const data = useSelector(state => state.ExamTimeReducer)
    const dispatch = useDispatch();



    const DateHandler = (e) =>{
        dispatch(ExamTimeAction.AddDate({ date : e.target.value }))
    }
    const StartHandler = (e) =>{
      dispatch(ExamTimeAction.AddStart({ start : e.target.value}))
    }
    const EndHandler = (e) =>{
      dispatch(ExamTimeAction.AddEnd({ end : e.target.value}))
    }
    const DurationHandler = (e) =>{
      dispatch(ExamTimeAction.AddDuration({ duration : e.target.value}))
    }

    const AccessHandler = (e) =>{
      dispatch(ExamTimeAction.AddAccess({ access : e.target.value }))
    }

    const TimeHandler = () =>{
      dispatch(ExamTimeAction.AddID({ subjectID : props.subjectID }))
      
      navigate('/examiner/subjectlist/exam/questions',{state : {courseID : props.courseID}})
    }

    
  return (
    <div className='exam-time'>
        <div className='exam-time-inputs'>
           <p>Exam Date :</p> <input type='date' onChange={DateHandler} />
           <p>Exam Time :</p> <input type='time' onChange={StartHandler} />
           <p>Exam Time :</p><input type='time' onChange={EndHandler} />
        </div>
        <div className='exam-time-info'>
          
          <TextField variant='standard' sx={{ mt:8}}  label="Exam Duration" placeholder='00/hr' onChange={DurationHandler}  />
            <TextField variant='standard' sx={{ mt:8}}  label="Access key" onChange={AccessHandler}  />
        </div>
        <div className='exam-time-btn'>
            <Button variant='contained' sx={{mt:5}} onClick={TimeHandler}>Next</Button>

        </div>

    </div>
  )
}

export default ExamTime