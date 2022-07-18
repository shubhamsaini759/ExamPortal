import React, { useEffect, useState } from 'react'
import ExaminerNav from '../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import ExamDetailInfo from './ExamDetail/ExamDetailInfo'

import api from '../../../../../Utils/api'
import { toast } from 'react-toastify'

const ExamDetail = () => {

  const [ examData, setExamData ] = useState([]);

  useEffect(()=>{
    api
      .get('https://exam-portal-by-hritik-sanam.herokuapp.com/examiner/exams',{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
      .then((result)=>{
        setExamData(result.data.data.exams)
        toast(result.data.message)
        
      })
      .catch((err)=>console.log(err,'examDetail'))

  },[])


  return (
    <div>
        <ExaminerNav /> 
        <ExamDetailInfo examData={examData} />
    </div>
  )
}

export default ExamDetail