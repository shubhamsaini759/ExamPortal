import React, { useEffect, useState } from 'react'
import api from '../../../../../../Utils/api'

import ExaminerNav from '../../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import './AddSubject.css'
import AddSubjectDetail from './AddSubjectDetail/AddSubjectDetail'

const AddSubject = () => {

    // useEffect(()=>{
    //     api
    //         .post('')
    //         .then((result)=>{
    //                         alert(result.data.message)
    //                         setSubject(result.data.data)
    //                         })
    //         .catch((err)=>console.log(err,'addSubject'))
    // })


  return (
    <>  
        <ExaminerNav />
        <AddSubjectDetail />
            
    </>
  )
}

export default AddSubject