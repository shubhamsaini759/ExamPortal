import React, { useState } from 'react'
import './ExamInfo.css'
import { Button } from '@mui/material'
import Timer from './Timer/Timer'
import getDaysToGo from 'get-days-to-go'
import ModalAccess from './ModalAccess/ModalAccess'


const ExamInfo = (props) => {

  const [modalShow, setModalShow] = useState(false);

  const showHandler = () => {
    setModalShow(oldData => !oldData);
  }
  
  return (
    <>
    {modalShow && <ModalAccess onConfirm={showHandler}  />}
    <div className='exam-info'>
        <div className='exam-info-heading'> 
            <h2>Exams List</h2>
        </div>
      { props.apply.map((x,ind)=>
        <div className='exam-info-box' key={ind}>
          {
            getDaysToGo(x.examDate).days === 0 && 
            Number(x.startTime.split(':')[0]) === new Date().getHours() && 
            Number(x.startTime.split(':')[1]) <= new Date().getMinutes()  ?
          
          
            <div className='exam-info-apply'>
                <Button variant='contained' >Apply Now</Button>
            </div> 
            :
            <div className='exam-info-time'>
              <h3>Remaining Time</h3>
              <Timer date={x.examDate} hours={x.startTime} />
            </div>
          }

          <div className='exam-info-detail'>
                <h5>{x.subject}</h5>
                <p>max time : {x.duration}</p>
          </div>
          <div className='exam-info-date'>
              <p>Start Time : {x.startTime}</p>
              <p>End Time : {x.endTime}</p>
              <button onClick={showHandler}>click</button>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default ExamInfo

