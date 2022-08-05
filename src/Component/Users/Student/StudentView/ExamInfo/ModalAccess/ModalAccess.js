import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ModalAccess.css";
import api from "../../../../../../Utils/api";
import { useNavigate } from "react-router-dom";

const ModalAccess = (props) => {

  const navigate = useNavigate();
  const [access, setAccess] = useState("");

  const [ids, setIds] = useState({});

  useEffect(() => {
    setIds({
      studentID: props.studentID,
      examID: props.examID,
      accessCode: access,
    });
  }, [access]);

  const modalHandler = () => {
    props.onConfirm();

    api
      .post('/student/accessExam',ids,{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
      .then((result)=> {
        // navigate('/student/viewexam/examque',{state : { paper : result.data.data}})
        navigate('/student/viewexam/examintsruction',{state : {studentID : result.data.data.studentID,examID:result.data.data.exam.examID}});
      })
      .catch((err)=>console.log(err,'access'))
  };

  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <div className="modal">
        <header className="modalheader">
          <h2>Enter Access key</h2>
        </header>
        <div className="modalcontent">
          <TextField
            variant="outlined"
            label="Access-Key "
            onChange={(e) => setAccess(e.target.value)}
          />
        </div>
        <footer className="modalactions">
          <Button variant="contained" onClick={modalHandler}>
            Submit
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default ModalAccess;
