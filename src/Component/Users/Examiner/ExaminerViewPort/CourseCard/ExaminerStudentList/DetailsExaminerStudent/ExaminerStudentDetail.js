import React, { useEffect, useState } from 'react'
import './ExaminerStudentDetail.css'

import studentImg from '../../../../../../../Assets/Global/student2.jpg'

import DeleteIcon from '@mui/icons-material/Delete';
import api from '../../../../../../../Utils/api';
import { toast } from 'react-toastify';

const ExaminerStudentDetail = (props) => {


    const deleteHandler = (studentID)=>{
      api
      .delete('examiner/student/'+studentID,{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
      .then((result)=>{
          toast(result.data.message)
          props.setRefresh(current=>!current);
      })
      .catch((err)=>console.log(err,'AddStudentsErr'))
    }




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
                <h5>{x.studentName}</h5>
                <p>{x.email}</p>
              </div>
          </div>
          <div className='Exmainer-student-data-course'>
              <h4>{x.course}</h4>
          </div>
          <div className='Exmainer-student-delete'>
              <DeleteIcon sx={{ mt : 4, mr : 2}} onClick={()=>deleteHandler(x._id)}/>
          </div>
        </div>
        )}
    </div>
  )
}

export default ExaminerStudentDetail