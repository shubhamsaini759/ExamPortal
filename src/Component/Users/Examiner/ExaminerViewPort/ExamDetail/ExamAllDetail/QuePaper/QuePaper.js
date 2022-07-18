import React from 'react'
import ExaminerNav from '../../../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import './QuePaper.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useLocation, useNavigate } from 'react-router-dom'

const QuePaper = () => {
    const navigate = useNavigate();
    const location = useLocation();

  return (
    <>
    <ExaminerNav />
        <div className='que-paperdetail'>
            <div className='que-paperdetail-back'>
                <ArrowBackIcon /><p onClick={()=>navigate('/examiner/examalldetail')}> Go Back</p>
            </div>
            <div className='que-paperdetail-heading'>

                <h2> Question Paper</h2>
            </div>
            { location.state.que.map((x,ind)=>
                <div className='que-paperdetail-ques'>
                    <div className='que-paperdetail-que'>
                        <h5>{ind + 1}.</h5> 
                        <p> {x.question} </p>?
                    </div>
                    <div className='que-paperdetail-option'>
                        <h5>(a) <span>{x.options[0]}</span></h5>
                        <h5>(b) <span>{x.options[1]}</span></h5>
                        <h5>(c) <span>{x.options[2]}</span></h5>
                        <h5>(d) <span>{x.options[3]}</span></h5>
                    </div>
                    <div className='que-paperdetail-correct'>
                        <h5>correct answer :  <span>{x.correctOption}</span></h5>
                        <h5>marks :  <span>{x.marks}</span> </h5>
                    </div>
                </div>
            )}
        </div>
    </>
  )
}

export default QuePaper