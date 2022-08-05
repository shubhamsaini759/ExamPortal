import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const ExamRecords = (props) => {
  return (
    <div className='exam-record'>
        <div className='exam-record-heading'>
            <h2>Exam Records</h2>
        </div>
        <div className='exam-record-detail'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell align="right">Subject Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.records.map((x,ind) => (
            <TableRow
              key={ind}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{x.course}</TableCell>
              <TableCell align="right">{x.subject}</TableCell>
              <TableCell align="right">{x.examDate.split('T')[0]}</TableCell>
              <TableCell align="right">{x.status}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
        </div>
    </div>
  )
}

export default ExamRecords