import { Button, TextField } from '@mui/material'
import React from 'react'
import './StudentDetail.css'

import { useSelector,useDispatch } from 'react-redux'
import { addStudentAction } from '../../../../../../../Store/Index'
import api from  '../../../../../../../Utils/api'

import { useNavigate } from 'react-router-dom'

const StudentDetail = (props) => {
    const navigate = useNavigate();

    const studentData = useSelector((state)=>state.addStudentReducer);

    const dispatch = useDispatch();

    const firstNameHandler = (e) =>{
          dispatch( addStudentAction.EnteredfName({fname : e.target.value}))
    } 
    const lastNameHandler = (e) =>{
          dispatch( addStudentAction.EnteredlName({lname : e.target.value}))
    }   
    const emailHandler = (e) =>{
          dispatch (addStudentAction.EnteredEmail({email : e.target.value}))
    }
    const passwordHandler = (e) =>{
          dispatch(addStudentAction.EnteredPassword({ password : e.target.value}))
    }
    const mobileHandler = (e) =>{
        dispatch(addStudentAction.EnteredMobile({ mobile : e.target.value}))
    }
    const fatherHandler = (e) =>{
        dispatch(addStudentAction.EnteredFather({ father : e.target.value}))
    }
    const motherHandler = (e) =>{
          dispatch(addStudentAction.EnteredMother({ mother : e.target.value}))
    }
    const dobHandler = (e) =>{
          dispatch(addStudentAction.EnteredDob({ dob : e.target.value}))
    }
    const addressHandler = (e) =>{
      dispatch(addStudentAction.EnteredAddress({ address : e.target.value}))
      
    }
    const cityHandler = (e) =>{
      dispatch(addStudentAction.EnteredCity({ city : e.target.value}))
      
    }
    const stateHandler = (e) =>{
      dispatch(addStudentAction.EnteredState({ state : e.target.value}))
      
    }
    const genderHandler = (e) =>{
      dispatch(addStudentAction.EnteredGender({ gender : e.target.value}))
    }

    const studentHandler = (e) =>{
      e.preventDefault();

      api
        .post('/examiner/student',{...studentData, courseID : props.courseId },{headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
        .then((result)=>{
                        alert(result.data.message)
                        navigate('/examiner/dashboard')
                      })
        .catch((err)=>console.log(err,'addStudent'))
    }




  return (
    <div className='student-detail'>
      <div>
        <h2>Student Details</h2>
      </div>
      <div className='student-detail-data'>
            <form className='student-detail-data-form' onSubmit={studentHandler} >
                <TextField id="standard-basic" label="First-Name" variant="standard" sx={{width : 300, mt: 2}} onChange={firstNameHandler}  />
                <TextField id="standard-basic" label="Last-Name" variant="standard" sx={{width : 300, mt: 2}} onChange={lastNameHandler} />
                <TextField id="standard-basic" label="Email" variant="standard" sx={{width : 300, mt: 2}} onChange={emailHandler} />
                <TextField id="standard-basic" label="Password" variant="standard" sx={{width : 300, mt: 2}} onChange={passwordHandler} />
                <TextField id="standard-basic" label="Mobile-Number" variant="standard" sx={{width : 300, mt: 2}} onChange={mobileHandler} />
                <TextField id="standard-basic" label="Father-Name" variant="standard" sx={{width : 300, mt: 2}} onChange={fatherHandler} />
                <TextField id="standard-basic" label="Mother-Name" variant="standard" sx={{width : 300, mt: 2}} onChange={motherHandler} />
                <TextField id="standard-basic" label="D.O.B" variant="standard" placeholder='DD/MM/YY' sx={{width : 300, mt: 2}} onChange={dobHandler} />
                <TextField id="standard-basic" label="Address" variant="standard" sx={{width : 300, mt: 2}} onChange={addressHandler} />
                <TextField id="standard-basic" label="City" variant="standard" sx={{width : 300, mt: 2}} onChange={cityHandler} />
                <TextField id="standard-basic" label="State" variant="standard" sx={{width : 300, mt: 2}} onChange={stateHandler} />
                <TextField id="standard-basic" label="Gender" variant="standard" placeholder='MALE/FEMALE/OTHER' sx={{width : 300, mt: 2}} onChange={genderHandler} />
                <Button type='submit' variant='contained' sx={{ mt: 2}} >Submit</Button>
            </form>
      </div>
    </div>
  )
}

export default StudentDetail