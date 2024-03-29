import React from 'react'
import './ExaminerSide.css'


import user from '../../../../Assets/Global/university.jpg'


import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';



import { useNavigate } from 'react-router-dom'


const ExaminerSide = (props) => {
    
        const navigate = useNavigate();

        const editHandler = () =>{
            navigate('/examiner/edit',{state : { data : props.examiner}})
        }


  return (
    <div className='examiner-side'>
        {
        
            <div className='examiner-side-detail'>
                <div className='examiner-side-image'>
                        <img src={user} alt='userprofile' />
                </div>  
                <div className='examiner-side-data'>
                        <h4>{props.examiner.firstName} {props.examiner.lastName}  <span>
                            <Tooltip title="edit" placement="bottom-end">
                                        <EditIcon fontSize='small' sx={{ml:2,cursor : 'pointer' }} onClick={editHandler}/>
                            </Tooltip>
                            </span></h4>
                        <p>{props.examiner.email}</p>
                </div>
            </div>
        }
        <div className='examiner-side-dashboard'>
            <p onClick={()=>navigate('/examiner/dashboard')}>DASHBOARDS</p>
            <div className='dashboard-btn'>
                <div className='dashboard-user'>
                    <div className='request-icon'>
                        <StickyNote2Icon />
                        <Button variant="text" onClick={()=>navigate('/examiner/createcourse')} >Create Course</Button>
                    </div>
                    <div className='exam-icon'>
                        <AutoStoriesIcon />
                        <Button variant="text" onClick={()=>navigate('/examiner/examdetails')} >Exam Details</Button>
                    </div>
                   

                   
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExaminerSide