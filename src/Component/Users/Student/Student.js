import React, { useEffect, useState } from 'react'
import './Student.css'

import HomeFooter from '../../Home/HomeGlobal/HomeFooter/HomeFooter'
import UserNav from '../UserNav/UserNav'
import StudentSide from './StudentSideBar/StudentSide'
import { useLocation } from 'react-router-dom'

import StudentDashboard from './StudentView/StudentDashboard/StudentDashboard'
import  ExamInfo from './StudentView/ExamInfo/ExamInfo'
import Results from './StudentView/Results/Results'

import api from '../../../Utils/api'
import { toast } from 'react-toastify'

const Student = () => {

   const { pathname } = useLocation();
   const path = pathname.split('/')[2];

   const [ student, setStudent ] = useState([]);
   const [ exam, setExam ] = useState([]);
   const [ apply, setApply ] = useState([]);



   useEffect(()=>{

    api 
      .get('/student/dashboard',{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
      .then((result)=>{
        setStudent(result.data.data.student)

      })
      .catch((err) => err,'error')

    if( path === 'dashboard'){
      api
          .get('/student/dashboard',{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
          .then((result)=>{
            setExam(result.data.data.student.exams)
            toast(result.data.message)

          })
          .catch((err) => err,'error')
    } 
    else if( path === 'viewexam'){
      api
      .get('/student/exams',{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
      .then((result)=>{
        setApply(result.data.data.exams)
        toast(result.data.message)

      })
      .catch((err) => err,'error')
    }
    },[path])

  return (
    <>
        <div className="student">
        <div className="student-left">
          <StudentSide student={student} />
        </div>
        <div className="student-right">
          <div className="student-right-top">
            <UserNav />
          </div>
          <div className="student-viewPort">
            { path === 'dashboard' && <StudentDashboard examDetail={exam} /> }
            { path === 'viewexam' && <ExamInfo apply={apply} /> }
            { path === 'result' && <Results /> }
          </div>
        </div>
      </div>
      <div>
        <HomeFooter />
      </div> 
    </>
  )
}

export default Student