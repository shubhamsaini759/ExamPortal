import React, { useState } from 'react'
import './Timer.css'
import getDaysToGo from 'get-days-to-go'

const Timer = (props) => {
    const [timer, setTimer] = useState({});

    const todayDate = new Date(props.date).getTime();
    const todayHrs = parseInt(props.hours.split(':')[0]) * 3600000;
    const todayMin = parseInt(props.hours.split(':')[1]) * 60000; 


    setInterval(()=>{
        setTimer(getDaysToGo(new Date(todayDate + todayHrs + todayMin)))
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
            <td>{timer.hrs }</td>
            <td>{timer.mins}</td>
            <td>{timer.secs}</td>
        </tr>
    </table>
  )
}

export default Timer