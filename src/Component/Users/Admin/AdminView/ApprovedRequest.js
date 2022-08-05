import React, { useEffect, useState } from 'react'
import './ApprovedRequest.css'

import examiner from '../../../../Assets/Global/university.jpg'
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';

import api from '../../../../Utils/api';

import { toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const ApprovedRequest = (props) => {

  const [ searchItem, setSearchItem ] = useState('');
  const [ searchList,setSearchList ] = useState([]);

  const [ search, setSearch ] = useState(0);
  const [ searchTotal, setSearchTotal ] =useState(0)

    const removeHandler = (x) =>{
      const data = { examinerID : x, action : 'DECLINED'}

      api
        .put('/admin/examiner',data,{ headers : {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}})
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
          // console.log(result)
                          toast(result.data.message)
                          props.updateId(x);
                          
                        })
        .catch((err)=>console.log(err))
    }

   

    useEffect(()=>{
      api 
      .get("/admin/examiners",{params : {status : 'approved',pageSize : 5,search : searchItem,pageIndex : search},headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
      .then((result)=>{
          console.log(result.data.data.Examiners,'searchlist')
          console.log(search,'searchnum')
          setSearchList(result.data.data.Examiners)
          setSearchTotal(result.data.data.totalPages)
      })
      .catch((err)=>{
        console.log(err,'searchApproved')
      })
    },[search,searchItem])

    useEffect(()=>{
    console.log(searchTotal,'total')
    },[searchTotal])



  return (
    

          <div className='approved'>
              <div className='approved-heading'>
                  <h2>ApprovedRequest</h2>
                  <div>
                    <TextField id="outlined-basic" size="small" label="Search" variant="standard" onChange={(e)=>setSearchItem(e.target.value)} />
                    <SearchIcon  sx={{ mt :2, cursor: 'pointer'}}  />
                  </div>
              </div>


              {
                searchItem.length > 0 ? 
                searchList.map((x,ind)=> 
                <div className='approved-examiner' key={ind} >
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
                :
                props.approved.map((x,ind)=>
                  <div className='approved-examiner' key={ind} >
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
               <div>
               {
                  searchItem.length > 0 ? 
                  (
                    <>
                      {
                        search > 0 &&
                         <Button onClick={()=>setSearch(search - 1) } >prev</Button>
                      }
                      {
                        search < searchTotal - 1 &&
                          <Button onClick={()=>setSearch(search + 1) } >next</Button>
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
                
                  {/* {
                    (props.pageNum > 0 || search > 0 )&&
                    <Button onClick={()=>{props.setPage((old)=>old-1); setSearch(search - 1);} } >prev</Button>
                  }
                  {
                     (props.pageNum < props.total-1 || search < searchTotal) &&
                    <Button onClick={()=>{props.setPage((old)=>old+1); setSearch(search + 1);} } >next</Button>
                  } */}
              </div>
          </div>
  )
}

export default ApprovedRequest