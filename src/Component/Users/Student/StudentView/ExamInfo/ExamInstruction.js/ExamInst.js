import { Button } from '@mui/material'
import React, { useState } from 'react'
import StudentNav from '../../../StudentNav/StudentNav'
import './ExamInst.css'

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import api from '../../../../../../Utils/api';
import { useNavigate, useLocation } from 'react-router-dom';

const ExamInst = () => {

    const location = useLocation();
    const navigate = useNavigate();


   
    const [ check, setCheck ] = useState(false);

    console.log(check)
    const StartHandler = () =>{

        check?
            
                    navigate('/student/viewexam/examque',{state :  location.state })
              
        :
        console.log('no')
    }
   
  return (
    <div className='instruction'>
        <StudentNav />
        <div className='exam-inst'>
            <div className='exam-inst-heading'>
                <h2>Terms & Conditions</h2>
            </div>
            <div className='exam-inst-list'>
                <ul type='square'>
                    <li>You must use a functioning webcam and microphone</li>
                    <li> No cell phones or other secondary devices in the room or test area</li>
                    <li>Your desk/table must be clear or any materials except your test-taking device</li>
                    <li>No one else can be in the room with you</li>
                    <li>No talking </li>
                    <li>The testing room must be well-lit and you must be clearly visible</li>
                    <li>No dual screens/monitors</li>
                    <li>Do not leave the camera </li>
                    <li>No use of additional applications or internet</li>
                </ul>
            </div>
            
        </div>
        <div className='exam-inst-check'>
                    <FormControlLabel control={<Checkbox onChange={()=>setCheck(!check)}  />} label='I have Read & Agree to the Terms' />
        </div>
        <div>
                <Button variant='contained' onClick={StartHandler}>Start Exam</Button>
        </div>
      
    </div>
  )
}

export default ExamInst