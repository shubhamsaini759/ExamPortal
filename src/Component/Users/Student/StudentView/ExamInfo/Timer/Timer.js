import React, { useState } from 'react'
import './Timer.css'
import getDaysToGo from 'get-days-to-go'

const Timer = (props) => {
    const [timer, setTimer] = useState({});

    
    setInterval(()=>setTimer(getDaysToGo(props.date)),1000)

  return (
    <table className='exam-info-time-detail'>
        <tr>
            <th>Days</th>
            <th>Hours</th>
            <th>Minutes</th>
            <th>Seconds</th>
        </tr>
        <tr>
            <td>{timer.days}</td>
            <td>{timer.hrs }</td>
            <td>{timer.mins}</td>
            <td>{timer.secs}</td>
        </tr>
    </table>
  )
}

export default Timer