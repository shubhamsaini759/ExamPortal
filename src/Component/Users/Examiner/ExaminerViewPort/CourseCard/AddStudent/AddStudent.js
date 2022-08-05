import React, { useState } from 'react'
import './AddStudent.css'
import StudentDetail from './StudentDetail/StudentDetail'

import { useLocation } from 'react-router-dom'
import ExaminerNav from '../../../ExaminerViewPort/NavExaminerGlobal/AddStudentNav/ExaminerNav'
import ExistingStudents from './StudentDetail/ExistingStudents/ExistingStudents'

const AddStudent = () => {
  const location = useLocation();
  const [ create,setCreate ] = useState(false)

  return (
    <>
        <ExaminerNav />
        { create?
        <StudentDetail courseId={location.state.courseId} /> 
        :
        <ExistingStudents create={setCreate} courseId={location.state.courseId} />
        
        
        }
    </>
  )
}

export default AddStudent