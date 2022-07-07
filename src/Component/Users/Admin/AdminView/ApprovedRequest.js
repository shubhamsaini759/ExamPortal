import React from 'react'
import './ApprovedRequest.css'

import examiner from '../../../../Assets/Global/university.jpg'
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';

import api from '../../../../Utils/api';

import { toast } from 'react-toastify';



const ApprovedRequest = (props) => {


    const removeHandler = (x) =>{
      const data = { examinerID : x, action : 'DECLINED'}

      api
        .put('/admin/examiner/action',data,{ headers : {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}})
        .then((result)=> {
                          toast(result.data.message)
                          props.updateId(x)
                          })
        .catch((err)=>console.log(err))

    }

    const deleteHandler = (x) =>{
      
      api
        .delete('/admin/examiner/' + x,{ headers : {Authorization : `Bearer ${localStorage.getItem('accessToken')}`}})
        .then((result) => {
          console.log(result)
                          toast(result.data.message)
                          props.updateId(x);
                        })
        .catch((err)=>console.log(err))
    }



  return (
    

          <div className='approved'>
              <div className='approved-heading'>
                  <h2>ApprovedRequest</h2>
              </div>


              {
                props.approved.map((x)=>
                  <div className='approved-examiner' >
                      <div className='approved-detail'>
                          <div className='approved-detail-image'>
                                  <img src={examiner} alt='examiner' />
                          </div>
                          <div className='approved-detail-data'>
                              <h5>{x.firstName} {x.lastName}</h5>
                              <p>{x.email}</p>
                          </div>
                      </div>
                      <div className='approved-detail-btn'>
                            <ClearIcon className='remove' onClick = {()=>removeHandler(x._id)} />
                            <DeleteIcon className='delete' onClick = {()=>deleteHandler(x._id)} />
                      </div>
                  </div>
                )
              }
          </div>
  )
}

export default ApprovedRequest