import React from 'react'
import { useLocation } from 'react-router-dom'
import ExaminerNav from '../../../../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import ExamStudentsDetail from './ExamStudentsDetail/ExamStudentsDetail'

const ExamStudents = () => {
  const location = useLocation();
  return (
    <div>
        <ExaminerNav />
        <ExamStudentsDetail courseID={location.state.courseID} question={location.state.questions} />
    </div>
  )
}

export default ExamStudents