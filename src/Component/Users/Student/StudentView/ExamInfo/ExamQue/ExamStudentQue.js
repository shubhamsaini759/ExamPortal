import React from 'react'
import { useLocation } from 'react-router-dom'
import ExaminerNav from '../../../../Examiner/ExaminerViewPort/NavExaminerGlobal/AddStudentNav/ExaminerNav';
import AnswerSheet from './AnswerSheet/AnswerSheet';
import QueAns from './QueAns/QueAns';



const ExamStudentQue = () => {

  const location = useLocation();
  return (
    <div className='paper'>
        <div className='paper-nav'>
            <ExaminerNav />
        </div>
        <div className='paper-sheet'>
          <QueAns ID={location.state} />
            {/* <AnswerSheet paper={location.state.paper} /> */}
        </div>
    </div>
  )
}

export default ExamStudentQue