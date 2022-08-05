import React, { useEffect, useState } from 'react'
import './DeclinedExaminer.css'
import examiner from '../../../../Assets/Global/university.jpg'


import ReplayIcon from '@mui/icons-material/Replay';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../../../../Utils/api';

import { toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const DeclinedExaminer = (props) => {
        const [ searchItem, setSearchItem ] = useState('');
        const [ searchList ,setSearchList ] = useState([]);

        const [ searchIndex, setSearchIndex ] = useState(0);
        const [ searchTotal, setSearchTotal ] = useState(0);



    const restoreHandler = (x) =>{
        const data = { examinerID : x, action : 'APPROVED' }

        
        api
            .put('/admin/examiner',data,{headers  : {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}})
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

    useEffect(()=>{
        api 
            .get('admin/examiners',{params : {status : 'declined',pageSize : 5,search : searchItem,pageIndex : searchIndex},headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                // console.log(result.data.data.Examiners,'declinedsearch')
                setSearchList(result.data.data.Examiners)
                setSearchTotal(result.data.data.totalPages)
            })
        },[searchItem,searchIndex])

        console.log(searchTotal,'decsearch')

  return (
    <div className='declined'>
            <div className='declined-heading'>
                <h2>Declined Request</h2>
                <div>
                    <TextField id="outlined-basic" size="small" label="Search" variant="standard" onChange={(e)=>setSearchItem(e.target.value)} />
                    <SearchIcon  sx={{ mt :2, cursor: 'pointer'}}  />
                </div>
            </div>


            {   searchItem.length > 0?
                 searchList.map((x,ind)=>
                 <div className='declined-examiner' key={ind} >
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
                
                :

            props.declined.map((x,ind)=>
                <div className='declined-examiner' key={ind} >
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

export default DeclinedExaminer