import React, { useEffect, useState } from 'react'
import './RequestExaminer.css'

import examiner from '../../../../Assets/Global/university.jpg'
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import api from '../../../../Utils/api';

import { toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const RequestExaminer = (props) => {

        const [ searchItem, setSearchItem ] = useState('');
        const [ searchList ,setSearchList ] = useState([]);

        const [ searchIndex, setSearchIndex ] = useState(0);
        const [ searchTotal, setSearchTotal ] = useState(0);
   
    const approvedHandler = (x) =>{
        const data = {examinerID : x, action : 'APPROVED'} 
                
        api 
        .put('/admin/examiner',data,{ headers : {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}})
        .then((result)=> {
                        toast(result.data.message);
                        props.updateId(x);
                        } )
        .catch((err)=>console.log(err.response.data.message))
      
    }

    const declineHandler = (x) =>{
        const data = {examinerID : x, action : 'DECLINED'} 

        api 
        .put('/admin/examiner',data,{ headers : {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}})
        .then((result)=> {
                            toast(result.data.message)
                            props.updateId(x);
                         } )
        .catch((err)=>console.log(err.response.data.message))
    }

    useEffect(()=>{
        api 
            .get('admin/examiners',{params : {status : 'pending',pageSize : 5,search : searchItem,pageIndex : searchIndex},headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                // console.log(result.data.data.Examiners,'declinedsearch')
                setSearchList(result.data.data.Examiners)
                setSearchTotal(result.data.data.totalPages)
            })
        },[searchItem,searchIndex])


  return (
    <div className='requset'>
        <div className='request-heading'>
                <h2>Examiner Requests</h2>
                <div>
                    <TextField id="outlined-basic" size="small" label="Search" variant="standard" onChange={(e)=>setSearchItem(e.target.value)} />
                    <SearchIcon  sx={{ mt :2, cursor: 'pointer'}}  />
                </div>
        </div>

        {   
            searchItem.length > 0 ?
            searchList.map((x) =>
            
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
            :
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
        <div>
               {
                  searchItem.length > 0 ? 
                  (
                    <>
                      {
                        searchIndex > 0 &&
                         <Button onClick={()=>setSearchIndex(searchIndex - 1) } >prev</Button>
                      }
                      {
                        searchIndex < searchTotal - 1 &&
                          <Button onClick={()=>setSearchIndex(searchIndex + 1) } >next</Button>
                      }
                    </>
                  )
                  :
                  (
                    <>
                      {
                        props.pageNum > 0  &&
                          <Button onClick={()=>props.setPage((old)=>old-1) } >prev</Button>
                      }
                      {
                        props.pageNum < props.total-1 &&
                          <Button onClick={()=>props.setPage((old)=>old+1) } >next</Button>
                      }
                    </>
                  )
                }
            </div>

        {/* <div>
                  {
                    (props.pageNum > 0 || searchIndex > 0) && 
                    <Button onClick={()=>{props.setPage((old)=>old-1); setSearchIndex(searchIndex - 1);}} >prev</Button>

                  }
                  {
                    ( props.pageNum < props.total-1 ||  searchIndex < searchTotal) && 
                    <Button onClick={()=>{props.setPage((old)=>old+1); setSearchIndex(searchIndex + 1);}} >next</Button>
                  }
              </div> */}
    </div>
  )
}

export default RequestExaminer