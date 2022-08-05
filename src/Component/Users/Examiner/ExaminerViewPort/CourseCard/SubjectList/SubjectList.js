import React, {  useEffect, useState } from 'react'
import api from '../../../../../../Utils/api';
import ExaminerNav from '../../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import SubjectListDetail from './SubjectListDetail/SubjectListDetail'

import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const SubjectList = () => {

  const [list, setList] = useState([]);
  const location = useLocation();
  const [ refresh, setRefresh ] = useState(false);

  useEffect(()=>{
      api
      .get('/examiner/courseSubjects?courseID=' + location.state.courseId,{headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
      .then((result)=>{
        setList(result.data.data.subjects)
        console.log(result.data.data.subjects)
        toast(result.data.message)
      })
      .catch((err)=>console.log(err,'subjectList'))
    },[refresh])
    
  return (  
    <>
        <ExaminerNav />
        <SubjectListDetail list={list} setRefresh={setRefresh} />        
    </>

    )
}

export default SubjectList