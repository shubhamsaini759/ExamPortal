import React from 'react'
import { useLocation } from 'react-router-dom'
import ExaminerNav from '../../../../Examiner/ExaminerViewPort/NavExaminerGlobal/AddStudentNav/ExaminerNav';
import AnswerSheet from './AnswerSheet/AnswerSheet';



const ExamStudentQue = () => {

  const location = useLocation();
  return (
    <div className='paper'>
        <div className='paper-nav'>
            <ExaminerNav />
        </div>
        <div className='paper-sheet'>
            <AnswerSheet paper={location.state.paper} />
        </div>
    </div>
  )
}

export default ExamStudentQue