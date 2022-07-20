import React, { useState } from 'react'
import './AnswerSheet.css';

const AnswerSheet = (props) => {
    const [checklist,setCheckList] = useState(Array(props.paper.exam.questions.length).fill(Array(4).fill(false)));
    
    const checkHandler =(i,j)=>{
        let values = Array(4).fill(false);
        setCheckList(checklist.map((v,ind)=>{
            if (i===ind) {
                values[j] = true;
                return values;
            } else {
                return v;
            }
        }))
    } 

    const submitHandler = () =>{
        let studentID = props.paper.studentID;
        let questions = props.paper.exam.questions;
        let answers = questions.map((q,i)=>{
            let ind = checklist[i].indexOf(true);
            if(ind >= 0){
                return {
                    studentID:studentID,
                    questionID:q.questionID,
                    answer:q.options[ind]
                }
            }
            else{
                return  {
                    studentID:studentID,
                    questionID:q.questionID,
                    answer:null
                }

            }
        })
        console.log(answers);
    }


  return (
    <div className='answer'>
        <div className='answer-heading'>
            <h2>Question Paper</h2>
            <button onClick={submitHandler}>submit</button>
        </div>
        { props.paper.exam.questions.map((x,ind)=>
            <div className='answer-box' key={ind}>
                <div className='answer-que'>
                    <p>{ind + 1 }. {x.question} </p>
                </div>
                <div className='answer-option'>
                    <div className='answer-box1'>
                        <input type='checkbox' checked={checklist[ind][0]} onClick={()=>checkHandler(ind,0)} /> {x.options[0]}
                        <input id="op" type='checkbox' checked={checklist[ind][1]} onClick={()=>checkHandler(ind,1)} /> {x.options[1]}
                    </div>
                    <div className='answer-box2'>
                        <input type='checkbox' checked={checklist[ind][2]} onClick={()=>checkHandler(ind,2)} /> {x.options[2]}
                        <input  id="op" type='checkbox' checked={checklist[ind][3]} onClick={()=>checkHandler(ind,3)} /> {x.options[3]}
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default AnswerSheet