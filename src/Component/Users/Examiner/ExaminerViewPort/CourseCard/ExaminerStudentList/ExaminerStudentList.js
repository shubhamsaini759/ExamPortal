import React, { useEffect, useState } from 'react'
import ExaminerNav from '../../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import ExaminerStudentDetail from './DetailsExaminerStudent/ExaminerStudentDetail'
import './ExaminerStudentList.css'

import api from '../../../../../../Utils/api'

import { useLocation } from 'react-router-dom'

const ExaminerStudentList = () => {

   const location = useLocation();

   const [ studentList, setStudentList ] = useState([]);
   const [refresh, setRefresh] = useState(false);
   useEffect(()=>{
         api   
            .get('examiner/courseStudents?courseID=' + location.state.courseId,{headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                              setStudentList(result.data.data.students)
                           })
            .catch((err)=>console.log(err,'studentList'))
   },[refresh])

  return (
     <>
        <ExaminerNav />
        <ExaminerStudentDetail setRefresh={setRefresh} students={studentList} />
     </>

  )
}

export default ExaminerStudentList