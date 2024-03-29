import React from 'react'
import './AdminSideBar.css'

import user from '../../../../Assets/Global/university.jpg'

import { useNavigate } from 'react-router-dom'


import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupIcon from '@mui/icons-material/Group';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { Button, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';



const AdminSideBar = (props) => {
    const navigate = useNavigate();
    
    const editHandler = () =>{
        navigate('/admin/edit',{state : { data : props.admin}})
    }

  return (
    <div className='admin-side'>
        {
        
            <div className='admin-side-detail'>
                <div className='admin-side-image'>
                        <img src={user} alt='userprofile' />
                </div>  
                <div className='admin-side-data'>
                        <h4>{props.admin.firstName} {props.admin.lastName} <span>
                        <Tooltip title="Edit Profile" placement="bottom-end">
                            
                            <EditIcon fontSize='small' sx={{ml:2,cursor : 'pointer' }} onClick={editHandler}/>
                        </Tooltip>   
                        </span> </h4>
                        
                        <p>{props.admin.email}</p>
                </div>
            </div>
        }
        <div className='admin-side-dashboard'>
            <p>DASHBOARDS</p>
            <div className='dashboard-btn'>
                <div className='dashboard-user'>
                    <div className='request-icon'>
                        <PersonAddAltIcon />
                        <Button onClick={()=>navigate('/admin/pending')} variant="text" >Request Examiner</Button>
                    </div>
                    <div className='approved-icon'>
                        <GroupIcon />
                        <Button onClick={()=>navigate('/admin/approved')} variant="text" >Approved Examiner</Button>
                    </div>
                    <div className='approved-icon'>
                        <PersonOffIcon />
                        <Button onClick={()=>navigate('/admin/declined')} variant="text" >Declined Examiner</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminSideBar