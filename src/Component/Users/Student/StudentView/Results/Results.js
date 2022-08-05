import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Results.css'

import api from '../../../../../Utils/api'
import { toast } from 'react-toastify'

const Results = () => {

      const [ resultDetail, setResultDetail ] = useState([]);

      useEffect(()=>{
          api
            .get('/student/results',{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
              console.log(result)
              toast(result.data.message)
              setResultDetail(result.data.data.results)
            })
            .catch((err)=> console.log(err,'studentResultErr'))
      },[])

  return (
    <div className='student-result'>
      <div className='student-result-heading'>
              <h2>Result</h2>
      </div>
      <div className='student-result-detail'>
            <TableContainer >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Subject Name</TableCell>
                    <TableCell align="right">Obtained Marks</TableCell>
                    <TableCell align="right">Total Marks</TableCell>
                    <TableCell align="right">Percentage</TableCell>
                    <TableCell align="right">Grade</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { resultDetail.map((x,ind)=>
                    <TableRow
                      key={ind}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{x.subject}</TableCell>
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
            {/* <table className='student-result-detail' >
                <tr className='student-result-table-heading'>
                  <th>Subject Name</th>
                  <th>Obtained Marks</th>
                  <th>Total Marks</th>
                  <th>Percentage</th>
                  <th>Grade</th>
                </tr>
                <tr className='student-result-table-data'>
                    <td>abc</td>
                    <td>33</td>
                    <td>100</td>
                    <td>33%</td>
                    <td>D</td>
                </tr>
            </table> */}
      </div>

    </div>
  )
}

export default Results