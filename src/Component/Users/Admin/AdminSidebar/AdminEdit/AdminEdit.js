import React, { useEffect, useState } from 'react'
import './AdminEdit.css'
import Nav from '../../Nav/Nav'
import { useLocation, useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import { Button, TextField } from '@mui/material';
import api from '../../../../../Utils/api';
import { toast } from 'react-toastify';


const AdminEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [ detail,setDetail ] = useState(location.state.data);

    const [ fval, setFVal ] = useState(false);
    const [ lval, setLVal ] = useState(false);
    const [ cval, setCVal ] = useState(false);

    const [ edit,setEdit ] = useState({
            firstName : '',
            lastName : '',
            mobileNumber : ''
    });
   

    const submitHandler = () =>{

        for (const key in edit) {
           if(!edit[key]){
                delete edit[key];
           }
        }

        api
            .patch('admin/profile',edit,{headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                toast(result.data.message)
                navigate('/Admin')
            })
            .catch((err)=>
                    console.log(err,'adminediterr'))
    }

   

  return (
    <div className='admin-edit'>
        <div className='admin-edit-nav'>
            <Nav />
        </div>
        <div className='admin-edit-heading'>
            <h2>Edit your Profile</h2>
        </div>
        <div className='admin-edit-detail'>
            <div className='admin-edit-detail-box'>
                <h4>First Name : <span>{detail.firstName} <EditIcon fontSize='small' sx={{ ml : 5, cursor :'pointer' }} onClick={()=>setFVal(!fval)} /></span></h4>
                { fval === true &&
                    <div>
                        <TextField variant='standard' onChange={(e)=>setEdit({...edit,firstName : e.target.value})} label='first-name' ></TextField>
                        {/* <Button onClick={submitHandler}>Edit</Button> */}
                    </div>
                }
                <h4>Last Name : <span>{detail.lastName}<EditIcon fontSize='small' sx={{ ml : 5, cursor :'pointer' }} onClick={()=>setLVal(!lval)} /></span></h4>
                { lval === true &&
                    <div>
                        <TextField variant='standard' onChange={(e)=>setEdit({...edit,lastName : e.target.value})} label='last-name' ></TextField>
                        {/* <Button onClick={EditLName}>Edit</Button> */}
                    </div>
                }
                <h4>Contact Name : <span>{detail.mobileNumber}<EditIcon fontSize='small' sx={{ ml : 5, cursor :'pointer' }} onClick={()=>setCVal(!cval)} /></span></h4>
                { cval === true &&
                    <div>
                        <TextField variant='standard' onChange={(e)=>setEdit({...edit,mobileNumber : e.target.value})} label='last-name' ></TextField>
                        {/* <Button onClick={EditCNum}>Edit</Button> */}
                    </div>
                }
                <h4>Email : <span>{detail.email}</span></h4>
                        <Button variant='contained' onClick={submitHandler}>Save</Button>

            </div>
        </div>
    </div>
  )
}

export default AdminEdit