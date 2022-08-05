import React, { useEffect, useState } from 'react'
import './Examiner.css'
import ExaminerSide from './ExaminerSide/ExaminerSide'

import HomeFooter from '../../Home/HomeGlobal/HomeFooter/HomeFooter'
import Courses from './ExaminerViewPort/CourseCard/Courses'
import api from '../../../Utils/api'
import CreateCourse from './ExaminerViewPort/CreateCourse/CreateCourse'

import { useLocation } from 'react-router-dom'
import UserNav from '../UserNav/UserNav'

const Examiner = () => {

    const [ examiner, setExaminer ] = useState({});
    const [ courses, setCourses ] = useState([]);

    const { pathname } = useLocation();
    const path = pathname.split("/")[2];

    const [refresh , setRefresh ] = useState(false);


    useEffect(()=>{
// console.log("render");
        if(path === 'dashboard'){
            api
            .get('/examiner/dashboard',{headers : {Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                                setExaminer(result.data.data.examinerDetails)
                                setCourses(result.data.data.examinerCourses)
                            })
            .catch((err)=>console.log(err,'examiner'))


        }else if(path === 'createcourse'){
            console.log('createcourse')
        }



    },[refresh])
  



  return (
    <>
        <div className='examiner'>
          <div className='examiner-left'>
              <ExaminerSide examiner={examiner} />
          </div>
          <div className='examiner-right'>
              <div className='examiner-right-top'>
                  <UserNav />
              </div>
              <div className='examiner-viewPort'>
               { path === 'dashboard' && <Courses setRefresh={setRefresh} courses={courses} />}
                { path === 'createcourse' && <CreateCourse /> }
                    
              </div>
          </div>
        </div>
        <div>
            <HomeFooter />
        </div>
  </>
    
  )
}

export default Examiner