import React, { useEffect } from 'react'
import './RequestExaminer.css'

import examiner from '../../../../Assets/Global/university.jpg'
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import api from '../../../../Utils/api';

import { toast } from 'react-toastify';
const RequestExaminer = (props) => {
   
    const approvedHandler = (x) =>{
        const data = {examinerID : x, action : 'APPROVED'} 
                console.log(x)
                
        api 
        .put('/admin/examiner/action',data,{ headers : {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}})
        .then((result)=> {
                        toast(result.data.message);
                        props.updateId(x);
                        } )
        .catch((err)=>console.log(err.response.data.message))
      
    }

    const declineHandler = (x) =>{
        const data = {examinerID : x, action : 'DECLINED'} 
        console.log(x)

        api 
        .put('/admin/examiner/action',data,{ headers : {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}})
        .then((result)=> {
                            toast(result.data.message)
                            props.updateId(x);
                         } )
        .catch((err)=>console.log(err.response.data.message))
    }



  return (
    <div className='requset'>
        <div className='request-heading'>
                <h2>Examiner Requests</h2>
        </div>

        {
            props.pending.map((x) =>
            
                <div className='request-examiner' key={x.id}>
                    <div className='request-detail'>
                        <div className='request-detail-image'>
                                <img src={examiner} alt='examiner' />
                        </div>
                        <div className='request-detail-data'>
                            <h5>{x.firstName}</h5>
                            <p>{x.email}</p>
                        </div>
                    </div>
                    <div className='request-detail-btn'>
                            <DoneIcon className='done'  onClick={()=>approvedHandler(x._id)} />
                            <ClearIcon className='cancel' onClick={()=>declineHandler(x._id)} />
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default RequestExaminer