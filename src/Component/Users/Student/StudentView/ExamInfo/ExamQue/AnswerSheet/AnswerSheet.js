// import { Button } from '@mui/material';
// import React, { useState } from 'react'
// import './AnswerSheet.css';

// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// const AnswerSheet = (props) => {
//     const [checklist,setCheckList] = useState(Array(props.paper.exam.questions.length).fill(Array(4).fill(false)));
//     const [btns,setBtns] = useState(Array(props.paper.exam.questions.length).fill("blue"));
//     const [index,SetIndex] = useState(0);

//     const checkHandler =(i,j)=>{
//         setBtns(btns.map((color,i)=>{
//             if (i===index) {
//                 return "green";
//             } else {
//                 return color;
//             }
//         }));
//         let values = Array(4).fill(false);
//         setCheckList(checklist.map((v,ind)=>{
//             if (i===ind) {
//                 values[j] = true;
//                 return values;
//             } else {
//                 return v;
//             }
//         }))
//     } 
    
//     const clickHandler = (index) => {
//         SetIndex(index);
    
//     }

//     const submitHandler = () =>{
//         let studentID = props.paper.studentID;
//         let questions = props.paper.exam.questions;
//         let answers = questions.map((q,i)=>{
//             let ind = checklist[i].indexOf(true);
//             if(ind >= 0){
//                 return {
//                     studentID:studentID,
//                     questionID:q.questionID,
//                     answer:q.options[ind]
//                 }
//             }
//             else{
//                 return  {
//                     studentID:studentID,
//                     questionID:q.questionID,
//                     answer:null
//                 }

//             }
//         })
//         console.log(answers);
//     }


//   return (
//     <div className='answer'>
//         <div className='answer-heading'>
//             <h2>Question Paper</h2>
//         </div>
//         <div className='box'>
//             <div className='answer-box'>
//                 <>
//                     <div className='answer-que'>
//                         <p>{index + 1 }. {props.paper.exam.questions[index].question} </p>
//                     </div>

//                     <div className='answer-option'>
//                             {/* <input type='checkbox' checked={checklist[index][0]} onClick={()=>checkHandler(index,0)} /> {props.paper.exam.questions[index].options[0]}
//                             <input id="op" type='checkbox' checked={checklist[index][1]} onClick={()=>checkHandler(index,1)} /> {props.paper.exam.questions[index].options[1]}
                        
//                             <input type='checkbox' checked={checklist[index][2]} onClick={()=>checkHandler(index,2)} /> {props.paper.exam.questions[index].options[2]}
//                             <input  id="op" type='checkbox' checked={checklist[index][3]} onClick={()=>checkHandler(index,3)} /> {props.paper.exam.questions[index].options[3]} */}

//                                 <FormControlLabel control={<Checkbox  checked={checklist[index][0]} onClick={()=>checkHandler(index,0)}  />} label={props.paper.exam.questions[index].options[0]} />
//                                 <FormControlLabel control={<Checkbox  checked={checklist[index][1]} onClick={()=>checkHandler(index,1)}  />} label={props.paper.exam.questions[index].options[1]} />
//                                 <FormControlLabel control={<Checkbox  checked={checklist[index][2]} onClick={()=>checkHandler(index,2)}  />} label={props.paper.exam.questions[index].options[2]} />
//                                 <FormControlLabel control={<Checkbox  checked={checklist[index][3]} onClick={()=>checkHandler(index,3)}  />} label={props.paper.exam.questions[index].options[3]} />
//                     </div>
//                 </>
//                 <div className='next-que'>
//                             <Button variant='contained'>next</Button>
//                 </div>
//             </div>

//             <div className='page-btm-border'>
//                 <div className='answer-page-btn'>
//                         {btns.map((color,i)=>
//                         <Button key={i} variant='contained' sx={{backgroundColor :color, m:1, height:0.3 }} onClick={()=>clickHandler(i)}>{i + 1}</Button>
                        
//                         )}
//                         <Button variant='outlined' onClick={submitHandler}>Done</Button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default AnswerSheet