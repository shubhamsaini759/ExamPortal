import React, { useEffect, useState } from 'react'
import ExaminerNav from '../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import ExamDetailInfo from './ExamDetail/ExamDetailInfo'

import api from '../../../../../Utils/api'
import { toast } from 'react-toastify'

const ExamDetail = () => {

  const [ examData, setExamData ] = useState([]);
  const [ refresh, setRefresh ] = useState(false);

  const [ totalPage,setTotalPage ] = useState(0);
  const [ pageInd, setPageInd ] = useState(0);


  useEffect(()=>{
    api
      .get('https://exam-portal-by-hritik-sanam.herokuapp.com/examiner/exams?pageIndex='+pageInd,{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
      .then((result)=>{
        setExamData(result.data.data.exams)
        setTotalPage(result.data.data.totalPages)
        console.log(result.data.data.exams,'details')
        toast(result.data.message)
        
      })
      .catch((err)=>console.log(err,'examDetail'))

  },[refresh,pageInd])


  return (
    <div>
        <ExaminerNav /> 
        <ExamDetailInfo examData={examData} pageInd={pageInd} totalPage={totalPage} setPageInd={setPageInd} setRefresh={setRefresh} />
    </div>
  )
}

export default ExamDetail