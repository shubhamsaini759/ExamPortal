import { Button } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify';
import api from '../../../../../../../../Utils/api';
import './ExistingStudents.css'

import examiner from '../../../../../../../../Assets/Global/laptop2.jpg'
import { useNavigate } from 'react-router-dom';


const ExistingStudents = (props) => {
    const navigate = useNavigate();

    const [ list, setList ] = useState([]);

    const [ total,setTotal ] = useState(0);
    const [ pageIndex,setPageIndex ] = useState(0);

    useMemo(()=>{},[total])

    useEffect(()=>{
        api
            .get('examiner/allStudents?pageIndex='+pageIndex,{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                setList(result.data.data.students)
                setTotal(result.data.data.totalPages)
                toast(result.data.message)

            })
            .catch((err)=>console.log(err,'getAllStudentsErr'))
    },[pageIndex])


    const AddHandler = (studentID) =>{
        let body = {
            studentID : studentID,
            courseID : props.courseId
        }
        api
        .post('examiner/addStudent',body,{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
        .then((result)=>{
            toast(result.data.message)

        })
        .catch((err)=>console.log(err,'AddStudentsErr'))
    }

  return (

    <div className='student-list'>
        <div className='student-list-heading'>
            <h2>Student List</h2>
            <div className='student-done'>
                <Button sx={{ mr : 5}} variant='contained' onClick={()=>navigate('/examiner/dashboard')}>Done</Button>
            </div>
        
        </div>


    {
      list.map((x,ind)=> 
      <div className='student-list-examiner' key={ind} >
              <div className='student-list-detail'>
                  <div className='student-list-detail-image'>
                          <img src={examiner} alt='examiner' />
                  </div>
                  <div className='student-list-detail-data'>
                      <h5>{x.firstName} {x.lastName}</h5>
                      <p>{x.email}</p>
                  </div>
              </div>
              <div className='student-list-detail-btn'>

                    <Button onClick={()=>AddHandler(x._id)} >Add</Button>
              </div>
          </div>
      )
     

      
        }
        <div>
            { pageIndex > 0 &&
                <Button onClick={()=>setPageIndex(pageIndex - 1)} >Prev</Button>
            }
            { pageIndex < total - 1 &&
                <Button onClick={()=>setPageIndex(pageIndex + 1)} >Next</Button>
            }
        </div>
        <div>
            <Button onClick = {()=>props.create(true)}>Create New</Button>
        </div>
   


     </div>


  )
}

export default ExistingStudents