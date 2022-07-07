import React from 'react'
import './DeclinedExaminer.css'
import examiner from '../../../../Assets/Global/university.jpg'


import ReplayIcon from '@mui/icons-material/Replay';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../../../../Utils/api';

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const DeclinedExaminer = (props) => {
        const navigate = useNavigate();

    const restoreHandler = (x) =>{
        const data = { examinerID : x, action : 'APPROVED' }


        api
            .put('/admin/examiner/action',data,{headers  : {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}})
            .then((result) => {
                                toast(result.data.message);
                                props.updateId(x);
                              })
            .catch((err) => console.log(err,'restore'))

    }

    const deleteHandler = (x) =>{

        api
            .delete('admin/examiner/'+ x,{ headers : {Authorization : `Bearer ${localStorage.getItem('accessToken')}`}})
            .then((result)=> {
                toast(result.data.message)
                props.updateId(x);
            })
            .catch((err) => console.log(err,'deleted'))


    }



  return (
    <div className='declined'>
            <div className='declined-heading'>
                <h2>Declined Request</h2>
            </div>


            {
            props.declined.map((x)=>
                <div className='declined-examiner' >
                    <div className='declined-detail'>
                        <div className='declined-detail-image'>
                                <img src={examiner} alt='examiner' />
                        </div>
                        <div className='declined-detail-data'>
                            <h5>{x.firstName} {x.lastName}</h5>
                            <p>{x.email}</p>
                        </div>
                    </div>
                    <div className='declined-detail-btn'>
                        <ReplayIcon className='restore' onClick = {()=>restoreHandler(x._id)} />
                        <DeleteIcon className='delete' onClick = {()=>deleteHandler(x._id)} />
                    </div>
                </div>
            )
            }
        </div>
  )
}

export default DeclinedExaminer