import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../../../../../Utils/api'
import './SubjectListDetail.css'

const SubjectListDetail = (props) => {

    const navigate = useNavigate();

    const removeHandler = (subjectID) =>{
        api
            .delete('examiner/subject/'+subjectID,{headers : {Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                toast(result.data.message)
                props.setRefresh(current=>!current)
            })
            .catch((err)=>
            console.log(err,'subjectRemoveErr'))
    }


  return (
    <>
       
            <div className='subject-list'>
                <div className='subject-list-heading'>
                    <h2>All Subjects</h2>
                </div>
                { props.list.map((x)=>
                    <div className='subject-list-detail' key={x.id}>
                        <div className='subject-list-detail-name'>
                            <h4>{x.subjectName}</h4>
                            <p>{x.subjectCourse}</p>   
                        </div>
                        <div className='subject-list-detail-btn'>
                            <Button variant='contained' sx={{ mr : 4 }} onClick={()=>navigate('/examiner/subjectlist/createexam',{state : {subjectID : x.subjectID, courseID : x._id}})}  >Create Exam</Button>
                            <Button variant='contained' onClick={()=>removeHandler(x.subjectID)}  >Remove</Button>
                        </div>
                        
                    </div>
             )}
             

            </div>
    </>
  )
}

export default SubjectListDetail