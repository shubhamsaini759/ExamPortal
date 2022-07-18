import React, {  useEffect, useState } from 'react'
import api from '../../../../../../Utils/api';
import ExaminerNav from '../../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import SubjectListDetail from './SubjectListDetail/SubjectListDetail'

import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const SubjectList = () => {

  const [list, setList] = useState([]);
  const location = useLocation();

  useEffect(()=>{
      api
      .get('/examiner/subjects/' + location.state.courseId,{headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
      .then((result)=>{
        setList(result.data.data.subjects)
        toast(result.data.message)
      })
      .catch((err)=>console.log(err,'subjectList'))
    },[])
  return (  
    <>
        <ExaminerNav />
        <SubjectListDetail list={list} />        
    </>

    )
}

export default SubjectList