import React, { useState } from 'react'
import './CreateQuestions.css'

import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ExamQueAction } from '../../../../../../../../../Store/Index'


const CreateQuestions = (props) => {
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);

    const data = useSelector(state => state.ExamQueReducer)
    const dispatch = useDispatch();


        const QueHandler = (e) =>{
                dispatch(ExamQueAction.AddQue({ que : e.target.value }))
        }
        const OneHandler = (e) =>{
            dispatch(ExamQueAction.AddOne({ one : e.target.value }))
        }
        const TwoHandler = (e) =>{
            dispatch(ExamQueAction.AddTwo({ two : e.target.value }))
        }
        const ThreeHandler = (e)=>{
            dispatch(ExamQueAction.AddThree({ three : e.target.value }))
        }
        const FourHandler = (e)=>{
            dispatch(ExamQueAction.AddFour({ four : e.target.value }))
        }
        const CorrectHandler = (e)=>{
            dispatch(ExamQueAction.AddCorrect({ correct : e.target.value }))
        }
        const MarksHandler = (e)=>{
            dispatch(ExamQueAction.AddMarks({ marks : e.target.value }))
        }
    
    // const questions = [];

    
    const AddHandler = (e) =>{
        e.preventDefault();
        // questions.push(data);
        setQuestions(oldData => [...oldData, data]);


        alert('added successfully')
        console.log(questions,'question')
    }

    const ShowHandler = () =>{
        console.log(questions,'showQuestion')
    }

  return (
    <div className='create-que'>
        <div className='create-que-done'>
            <Button variant='contained' onClick={()=>navigate('/examiner/subjectlist/exam/students',{state : {courseID : props.courseID, questions:questions }})} >Done</Button>
        </div>
        <div className='create-que-heading'>
                <h2>CREATE EXAM</h2>
        </div>
        <form onSubmit={AddHandler}>
            <div className='create-que-question'>
                <TextField id="standard-basic" label="Question" sx={{ width : 800}} variant="standard" onChange={QueHandler} />
            </div>
            <div className='create-que-option'>
                <TextField id="standard-basic" label="Option-a" sx={{mt:4}} variant="standard" onChange={OneHandler} />
                <TextField id="standard-basic" label="Option-b" sx={{mt:4}} variant="standard" onChange={TwoHandler} />
                <TextField id="standard-basic" label="Option-c" sx={{mt:4}} variant="standard" onChange={ThreeHandler} />
                <TextField id="standard-basic" label="Option-d" sx={{mt:4}} variant="standard" onChange={FourHandler} />
            </div>
            <div className='create-que-other'>
                <TextField id="standard-basic" label="Correct-Answer" variant="standard" onChange={CorrectHandler} />
                <TextField id="standard-basic" label="Marks" variant="standard" onChange={MarksHandler} />
            </div>
            <div className='create-que-btn'>
                <Button variant='contained' sx={{mr:5}} type='submit' >Add Question</Button>
                <Button variant='contained' onClick={ShowHandler} >Show Questions</Button>
            </div>
        </form>
    </div>
  )
}

export default CreateQuestions