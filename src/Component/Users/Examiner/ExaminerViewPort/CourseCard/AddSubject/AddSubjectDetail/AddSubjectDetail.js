import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './AddSubjectDetail.css'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../../../../../../../Utils/api'
import { toast } from 'react-toastify'

const AddSubjectDetail = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [ subject, setSubject ] = useState({ name : '', courseID : '' });

  const AddHandler = (e) =>{
    setSubject({ name : e.target.value, courseID : location.state.courseId })

  }
  const SubmitHandler = (e) =>{
    e.preventDefault();
      
    api
      .post('examiner/addSubjects',{subjects: [subject]},{headers : { AuthoriZation : `${localStorage.getItem('accessToken')}`}})
      .then((result)=>{
          toast(result.data.message);
          navigate('/examiner/dashboard');
      })
      .catch((err)=>console.log(err,'addSubject'))
  }

  return (
    <div className='add-subject'>
        <div className='add-subject-heading'>
            <h2>Add Subject</h2>
        </div>
        <form className='add-subject-detail'  onSubmit={SubmitHandler}>
            <TextField id="standard-basic" label="Subject-Name" variant="standard" onChange={AddHandler} />
            <Button type='submit' variant='contained' sx={{ mt : 6 }}>Add</Button>
      </form>
    </div>
  )
}

export default AddSubjectDetail