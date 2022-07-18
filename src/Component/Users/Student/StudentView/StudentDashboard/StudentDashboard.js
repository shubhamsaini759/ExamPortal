import React from 'react'
import './StudentDashboard.css'

const StudentDashboard = (props) => {
  return (
    <div className='student-dashboard'>
        <table className='student-dashboard-table'>
            <tr className='student-dashboard-table-heading'>
                <th>SNo.</th>
                <th>Name</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>Duration</th>
            </tr>
        { props.examDetail.map((x,ind)=>
            <tr className='student-dashboard-table-data'>
                <td>{ind + 1}</td>
                <td>{x.subject}</td>
                <td>{x.examDate.split('T')[0]}</td>
                <td>{x.startTime}</td>
                <td>{x.duration}</td>
            </tr>
        )}
        </table>
        
    </div>
  )
}

export default StudentDashboard