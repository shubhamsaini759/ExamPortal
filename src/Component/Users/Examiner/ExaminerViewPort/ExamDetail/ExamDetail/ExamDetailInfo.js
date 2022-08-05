import React, { useState } from 'react'
import './ExamDetailInfo.css'

import img from '../../../../../../Assets/Global/student2.jpg'

import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { ViewExamAction } from '../../../../../../Store/Index';
import Tooltip from '@mui/material/Tooltip';

import DeleteIcon from '@mui/icons-material/Delete';
import api from '../../../../../../Utils/api';
import { toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


const ExamDetailInfo = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const[ flag,setFlag ] = useState(false);
    const [ edit, setEdit ] = useState({
        examDate : '',
        startTime : '',
        endTime : ''
    })

    const ImageHandler = (x) =>{
        dispatch(ViewExamAction.ExamInfo({info : x}))
        navigate('/examiner/examalldetail')
        // console.log(x,'x')
    }

    const deleteHandler = (examID) =>{
        api
            .delete('examiner/exam/'+examID,{headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                toast(result.data.message)
                props.setRefresh(x=>!x)

            })
            .catch((err)=>console.log(err,'examDeleteErr'))
    }

    const editHandler = (examID) =>{
        edit.examID = examID

        flag &&
            api
                .patch('examiner/exam/',edit,{headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
                .then((result)=>{
                    toast(result.data.message)
                    props.setRefresh(x=>!x)
                })
                .catch((err)=> console.log(err,'examEditErr'))
                setFlag(!flag)
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
                        { flag? 
                            <TextField type='date' label='date' onChange={(e)=>setEdit({...edit,examDate : e.target.value})} />
                            :
                            <h6>Date : {x.examDate.split('T')[0]}</h6>
                        }
                    </div>
                    <div className='exam-detail-time'>
                        { flag?
                            <TextField type='time' label='start-time'   onChange={(e)=>setEdit({...edit,startTime : e.target.value})}  />
                            :
                            <h6>Start Time : {x.startTime}</h6>
                        }
                        { flag?
                            <TextField type='time' label='last-time'sx={{mt:1}}   onChange={(e)=>setEdit({...edit,endTime : e.target.value})}  />
                            :
                            <h6>End Time : {x.endTime}</h6>
                        }
                    </div>
                </div>
                <div className='exam-detail-delete'>

                { 
                    new Date(x.examDate).getTime() > Date.now() ?
                    <>
                        <Tooltip title="Delete Exam" placement="right">
                            <DeleteIcon sx={{mr :2}} onClick={()=>deleteHandler(x.examID)} />
                        </Tooltip>

                        <Tooltip title="Edit Exam" placement="right">
                            <EditIcon onClick={()=>editHandler(x.examID)} />
                        </Tooltip>
                    </>
                    :
                    <Button  onClick={()=>navigate('/examiner/examdetail/result',{ state : {examID : x.examID}})} >View Result</Button>

                }

                </div>
        </div>
        )}
        <div>
            { 
            props.pageInd > 0 &&
            <Button onClick={()=>props.setPageInd(x=>x - 1)}>prev</Button>
            }
            {
                props.pageInd < props.totalPage - 1 &&
            <Button onClick={()=>props.setPageInd(x=>x + 1)}>Next</Button>

            }
        </div>
    </div>
  )
}

export default ExamDetailInfo