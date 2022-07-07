import React from 'react'
import './ExaminerStudentDetail.css'

import studentImg from '../../../../../../../Assets/Global/student2.jpg'

const ExaminerStudentDetail = (props) => {
  return (
    <div className='Examiner-student'>
        <div className='Examiner-student-heading'>
            <h2>Student List</h2>
        </div>
        { props.students.map((x)=>
        <div className='Exmainer-student-data'>
          <div className='Exmainer-student-data-detail'>
              <div className='Exmainer-student-data-img'>
                  <img src={studentImg} alt='studentimg' />
              </div>
              <div className='Exmainer-student-data-info'>
                <h5>{x.name}</h5>
                <p>{x.email}</p>
              </div>
          </div>
          <div className='Exmainer-student-data-course'>
              <h4>{x.course}</h4>
          </div>
        </div>
        )}
    </div>
  )
}

export default ExaminerStudentDetail