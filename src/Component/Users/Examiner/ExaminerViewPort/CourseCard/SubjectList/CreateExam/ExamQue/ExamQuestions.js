import React from 'react'
import { useLocation } from 'react-router-dom'
import ExaminerNav from '../../../../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import CreateQuestions from './CreateQuetions/CreateQuestions'

const ExamQuestions = () => {
  const location = useLocation();
  return (
    <div>
        <ExaminerNav />
        <CreateQuestions courseID={location.state.courseID} />
    </div>
  )
}

export default ExamQuestions