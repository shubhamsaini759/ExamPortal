import React from 'react'
import './ExamDetailInfo.css'

import img from '../../../../../../Assets/Global/student2.jpg'

import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { ViewExamAction } from '../../../../../../Store/Index';
import Tooltip from '@mui/material/Tooltip';



const ExamDetailInfo = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const ImageHandler = (x) =>{
        dispatch(ViewExamAction.ExamInfo({info : x}))
        navigate('/examiner/examalldetail')
    }

  return (
    <div className='exam-detail'>
        <div className='exam-detail-back'>
                <ArrowBackIcon /><p onClick={()=>navigate('/examiner/dashboard')}> Go Back</p>
            </div>
        <div className='exam-detail-heading'>
            <h2>EXAM's DETAIL</h2>
        </div>
        { props.examData.map((x)=>
        <div className='exam-deatil-card'>
                <div className='exam-detail-img'>
                  <Tooltip title="More details" placement="right">
                        <img src={img} alt='image' onClick={()=>ImageHandler(x)} />
                  </Tooltip>
                </div>
                <div className='exam-detail-card-info'>
                    <h4>{x.course}</h4>
                    <h4>{x.subject}</h4>

                </div>
                <div className='exam-detail-schedual'>
                    <div className='exam-detail-date'>
                        <h6>Date : {x.examDate.split('T')[0]}</h6>
                    </div>
                    <div className='exam-detail-time'>
                        <h6>Start Time : {x.startTime}</h6>
                        <h6>End Time : {x.endTime}</h6>
                    </div>
                </div>
        </div>
        )}
    </div>
  )
}

export default ExamDetailInfo