import React from 'react'
import './CreateQuestions.css'

import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const CreateQuestions = () => {
    const navigate = useNavigate();
  return (
    <div className='create-que'>
        <div className='create-que-done'>
            <Button variant='contained' onClick={()=>navigate('/examiner/subjectlist/exam/students')} >Done</Button>
        </div>
        <div className='create-que-heading'>
                <h2>CREATE EXAM</h2>
        </div>
        <div className='create-que-question'>
            <TextField id="standard-basic" label="Question" sx={{ width : 800}} variant="standard" />
        </div>
        <div className='create-que-option'>
            <TextField id="standard-basic" label="Option-a" sx={{mt:4}} variant="standard" />
            <TextField id="standard-basic" label="Option-b" sx={{mt:4}} variant="standard" />
            <TextField id="standard-basic" label="Option-c" sx={{mt:4}} variant="standard" />
            <TextField id="standard-basic" label="Option-d" sx={{mt:4}} variant="standard" />
        </div>
        <div className='create-que-other'>
            <TextField id="standard-basic" label="Correct-Answer" variant="standard" />
            <TextField id="standard-basic" label="Marks" variant="standard" />
        </div>
        <div className='create-que-btn'>
            <Button variant='contained' sx={{mr:5}}>Add Question</Button>
            <Button variant='contained'>Show Questions</Button>
        </div>

    </div>
  )
}

export default CreateQuestions