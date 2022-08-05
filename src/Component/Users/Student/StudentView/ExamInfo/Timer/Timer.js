import React, { useState } from 'react'
import './Timer.css'
import getDaysToGo from 'get-days-to-go'

const Timer = (props) => {
    const [timer, setTimer] = useState({});

    const todayDate = (new Date(`${props.date.split("T")[0]} ${props.hours.split(':')[0]}:${props.hours.split(':')[1]}:00`)).getTime() + 5 * 3600000 + 1800000
    setInterval(()=>{
        setTimer(getDaysToGo(todayDate))
    },1000)

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
            <td>{timer.hours }</td>
            <td>{timer.minutes}</td>
            <td>{timer.seconds}</td>
        </tr>
    </table>
  )
}

export default Timer