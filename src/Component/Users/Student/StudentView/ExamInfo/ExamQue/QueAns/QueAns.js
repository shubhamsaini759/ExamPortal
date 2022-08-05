import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { useEffect, useMemo, useState, useTransition } from 'react'
import './QueAns.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../../../../../../Utils/api'

const QueAns = (props) => {

    const navigate = useNavigate();

    const [ ques, setQues ] = useState([]);
    const [ pageIndex, setPageIndex ] = useState(0);
    const [ isPending,setIsPending ] = useTransition();
    const [ totalPage,setTotalPage ] = useState(0);

    const [buttons, setButtons] = useState([]);
   

    const [ queAns, setQueAns ] = useState({});

    useMemo(() => {

    }, [queAns]);


    useEffect(()=>{
        api
            .get('/student/questions?studentID='+props.ID.studentID+'&examID='+props.ID.examID+'&pageIndex='+pageIndex,{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                console.log(result)
                setIsPending(()=>{setQues(result.data.data.question)})
                setTotalPage(result.data.data.totalPages)
                setButtons(Array(result.data.data.totalPages).fill('GoldenRod'))
            })
            .catch((err)=>{
                console.log(err,'Queans')
            })
    },[])

    const changePage = (page)=>{
        api
        .get('/student/questions?studentID='+props.ID.studentID+'&examID='+props.ID.examID+'&pageIndex='+page,{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
        .then((result)=>{
            // console.log(result)
            setIsPending(()=>{
                setPageIndex(page)
                setQues(result.data.data.question)
            })
        })
        .catch((err)=>{
            console.log(err,'Que-ans')
        })
    }

  

    console.log(totalPage,'total')
    

    const CheckHandler = (e,ind,queID) =>{
        
        setQueAns({...queAns,[pageIndex]:ind})
        setButtons(buttons.map((color,i)=>i===pageIndex?'SeaGreen':color));
        


        const data = {
            questionID : queID,
            studentID : props.ID.studentID,
            answer : e
        }

        api 
            .post('student/answer',data,{ headers : { Authorization : `${ localStorage.getItem('accessToken')}`}})
            .then((result)=>{

                toast(result.data.message)

            })
            .catch((err)=> console.log(err,'CheckHandler'))
    }

    const submitHandler = () =>{
        
        api 
            .post('student/exam',props.ID,{ headers : { Authorization : `${ localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                toast(result.data.message)
                navigate('/student/dashboard')
            })
            .catch((err)=>console.log(err,'submitHandler'))
    }

  return (
    <div className='que-ans'>
        <div className='que-ans-time'>
            02:00 
        </div>
        <div className='que-ans-box'>
            { isPending ? <p>loading...</p> : ques.map((x)=>
            <div className='que-ans-box'>
                <div className='que-ans-ques'>
                    <h4>{pageIndex + 1}. {x.question} </h4>
                </div>

                <div className='que-ans-option'>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={x.options[queAns[pageIndex]]}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel control={<Radio  value= {x.options[0]} onClick={(e)=>CheckHandler(e.target.value,0,x._id)} />}  label= {x.options[0]} />
                        <FormControlLabel control={<Radio  value= {x.options[1]} onClick={(e)=>CheckHandler(e.target.value,1,x._id)} />}  label= {x.options[1]} />
                        <FormControlLabel control={<Radio  value= {x.options[2]} onClick={(e)=>CheckHandler(e.target.value,2,x._id)} />}  label= {x.options[2]} />
                        <FormControlLabel control={<Radio  value= {x.options[3]} onClick={(e)=>CheckHandler(e.target.value,3,x._id)} />}  label= {x.options[3]} />
                    </RadioGroup>
                </div>
            </div>
            )}

            <div className='que-ans-btn'>
                <Button variant='contained' sx={{ml:5}} onClick={()=> {changePage(pageIndex - 1)}} >Prev</Button>
                { pageIndex < totalPage -1 ?
                
                <Button variant='contained' sx={{ml:5}} onClick={()=> {changePage(pageIndex + 1)}} >Next</Button>
                :
                <Button variant='contained' sx={{ml:5}} onClick={submitHandler}>Submit</Button>
                }
            </div>
        </div>
        <div className='que-ans-pageBtn'>
            { buttons.map((x,ind)=>
                <Button sx={{ backgroundColor : x,color : 'white', ml : 3 }} onClick={()=>{changePage(ind)}} >{ind + 1}</Button>
            )}
        </div>
    </div>
  )
}

export default QueAns