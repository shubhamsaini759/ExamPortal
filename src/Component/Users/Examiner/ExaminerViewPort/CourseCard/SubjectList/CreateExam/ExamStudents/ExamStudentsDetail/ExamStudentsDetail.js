import React, { useEffect, useState } from 'react'
import './ExamStudentsDetail.css'
import DoneIcon from '@mui/icons-material/Done';

import img from '../../../../../../../../../Assets/Global/laptop.jpg'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import api from '../../../../../../../../../Utils/api'
import { useDispatch, useSelector } from 'react-redux';
import { ExamStudentAction } from '../../../../../../../../../Store/Index';
import { toast } from 'react-toastify';

const ExamStudentsDetail = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Time = useSelector(state => state.ExamTimeReducer)
    const questions  = props.question;
    // const studentId = useSelector( state => state.ExamStudentReducer )

    const [ studentList , setStudentList ] = useState([]);
    const [ checkList, setCheckList ] = useState([]);
    


    const checkHandler = (i) =>{
        setCheckList(checkList.map((v,ind)=> i===ind?!v:v ))
        // dispatch(ExamStudentAction.AddStudent({ student : x }))
    }

    const studentHandler =() =>{
        const studentIds = studentList.filter((v,ind)=>checkList[ind]).map((v)=>v._id);
        // const studentIds = studentList.map(x => x._id);
        console.log(Time,questions,studentIds)
        const body = {
            ...Time,
            questions:questions,
            students:studentIds
        }
        console.log(body,'body')
        api 
            .post('/examiner/createExam',body,{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                toast(result.data.message)
                navigate('/examiner/dashboard')

            })
            .catch((err)=>console.log(err,'examcreatedone'))

    }


    useEffect(()=>{
    
        api
            .get('/examiner/courseStudents?courseID='+ props.courseID,{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                let std = result.data.data.students;
                setStudentList(result.data.data.students);
                setCheckList(Array(std.length).fill(false));
            })
            .catch((err)=>console.log(err,'examStudentList'))
    },[])

  return (
    <div className='exam-student'>
        <div className='exam-student-done'>
            <Button variant='contained' onClick={studentHandler} >Done</Button>
        </div>
        <div className='exam-student-heading'>
            <h2>Students List</h2>
        </div>
        { studentList.map((x,i)=>
            <div className='exam-student-detail'>
                <div className='exam-student-detail-data'>
                    <div className='exam-student-detail-img'>
                        <img src={img} alt='img' /> 
                    </div>
                    <div className='exam-student-detail-info'>
                        <h4>{x.name}</h4>
                        <p>{x.email}</p>
                    </div>
                </div>
                <div className='exam-student-detail-btn'>
                    <input type='checkbox' checked={checkList[i]} onClick={()=>checkHandler(i)}/>
                    {/* <Button variant='outlined' onClick={()=>checkHandler(x._id)}>ADD</Button>  */}
                </div>
            </div>
        )}
    </div>
  )
}

export default ExamStudentsDetail