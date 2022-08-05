import React, { useEffect, useState } from 'react'
import './ExaminerResult.css'
import { useLocation } from 'react-router-dom'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import ExaminerNav from '../../../NavExaminerGlobal/AddStudentNav/ExaminerNav'
import { toast } from 'react-toastify';
import api from '../../../../../../../Utils/api'


const ExaminerResult = () => {

    const location = useLocation();
    const [ resultList, setResultList ] = useState([])

    useEffect(()=>{
      api
            .get('examiner/result?examID='+location.state.examID,{headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
              // console.log(result.data.data,'examiner')
              setResultList(result.data.data.results)
                toast(result.data.message)
                
            })
            .catch((err)=> console.log(err,'examEditErr'))
    },[])


      const DeclareHandler = () =>{
        api
            .post('examiner/result/',{examID : location.state.examID},{headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                toast(result.data.message)
                
            })
            .catch((err)=> console.log(err,'examEditErr'))
     }
  return (

    <div className='examiner-result'>
      <ExaminerNav />
      <div className='examiner-result-heading'>
          <h2>Result</h2>
      </div>
      <div className='examiner-result-detail'>
      <TableContainer >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>S.No</TableCell>
                    <TableCell>Student Name</TableCell>
                    <TableCell align="right">Obtained Marks</TableCell>
                    <TableCell align="right">Total Marks</TableCell>
                    <TableCell align="right">Percentage</TableCell>
                    <TableCell align="right">Grade</TableCell>
                    <TableCell align="right">Status</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  { resultList.map((x,ind)=>
                    <TableRow
                      key={ind}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{ind +1}</TableCell>
                      <TableCell component="th" scope="row">{x.studentName}</TableCell>
                      <TableCell align="right">{x.marksObtained}</TableCell>
                      <TableCell align="right">{x.totalMarks}</TableCell>
                      <TableCell align="right">{x.percentage} %</TableCell>
                      <TableCell align="right">{x.grade}</TableCell>
                      <TableCell align="right">{x.status}</TableCell>

                    </TableRow>
                  )} 
                </TableBody>
              </Table>
            </TableContainer>
      </div>
      <div className='examiner-result-btn'>
         <Button variant='contained' sx={{mt:10}} onClick={DeclareHandler}>Declare result</Button>
      </div>

    </div>
  )
}

export default ExaminerResult