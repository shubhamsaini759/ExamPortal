import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SubjectListDetail.css'

const SubjectListDetail = (props) => {

    const navigate = useNavigate();

  return (
    <>
       
            <div className='subject-list'>
                <div className='subject-list-heading'>
                    <h2>All Subjects</h2>
                </div>
                { props.list.map((x)=>
                    <div className='subject-list-detail' key={x.id}>
                        <div className='subject-list-detail-name'>
                            <h4>{x.name}</h4>
                            <p>{x.course}</p>   
                        </div>
                        <div className='subject-list-detail-btn'>
                            <Button variant='contained' sx={{ mr : 4 }} onClick={()=>navigate('/examiner/subjectlist/createexam',{state : {subjectID : x.subjectID, courseID : x._id}})}  >Create Exam</Button>
                            <Button variant='contained'  >Remove</Button>
                        </div>
                        
                    </div>
             )}
             

            </div>
    </>
  )
}

export default SubjectListDetail