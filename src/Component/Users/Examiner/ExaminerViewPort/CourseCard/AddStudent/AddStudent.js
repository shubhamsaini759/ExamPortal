import React from 'react'
import './AddStudent.css'
import StudentDetail from './StudentDetail/StudentDetail'

import { useLocation } from 'react-router-dom'
import ExaminerNav from '../../../ExaminerViewPort/NavExaminerGlobal/AddStudentNav/ExaminerNav'

const AddStudent = () => {
  const location = useLocation();

  return (
    <>
        <ExaminerNav />
        <StudentDetail courseId={location.state.courseId} />
    </>
  )
}

export default AddStudent