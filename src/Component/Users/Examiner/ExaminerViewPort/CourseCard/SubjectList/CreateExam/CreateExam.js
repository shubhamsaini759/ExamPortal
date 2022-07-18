import React from 'react'
import { useLocation } from 'react-router-dom'
import ExaminerNav from '../../../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import ExamTime from './ExamTime/ExamTime'

const CreateExam = () => {
  const location = useLocation();
  return (
    <div>
        <ExaminerNav />
        <ExamTime courseID={location.state.courseID} subjectID={location.state.subjectID} />
    </div>
  )
}

export default CreateExam