import React, { useState } from "react";
import "./ExamInfo.css";
import { Button } from "@mui/material";
import Timer from "./Timer/Timer";
import getDaysToGo from "get-days-to-go";
import ModalAccess from "./ModalAccess/ModalAccess";

const ExamInfo = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const showHandler = () => {
    setModalShow((oldData) => !oldData);
  };

  return (
    <>
      <div className="exam-info">
        <div className="exam-info-heading">
          <h2>Exams List</h2>
        </div>
        {props.apply.map((x, ind) => (
          <div className="exam-info-box" key={ind}>
          

            {getDaysToGo(
              new Date(
                `${x.examDate.split("T")[0]} ${x.endTime.split(":")[0]}:${
                  x.endTime.split(":")[1]
                }:00`
              ).getTime() +
                5 * 3600000 +
                1800000
            ).days === 0 &&
            getDaysToGo(
              new Date(
                `${x.examDate.split("T")[0]} ${x.endTime.split(":")[0]}:${
                  x.endTime.split(":")[1]
                }:00`
              ).getTime() +
                5 * 3600000 +
                1800000
            ).hours === 0 &&
            getDaysToGo(
              new Date(
                `${x.examDate.split("T")[0]} ${x.endTime.split(":")[0]}:${
                  x.endTime.split(":")[1]
                }:00`
              ).getTime() +
                5 * 3600000 +
                1800000
            ).minutes === 0 ? (
              <div className="exam-info-time">
                <h2>time's up</h2>
              </div>
            ) : getDaysToGo(
                new Date(
                  `${x.examDate.split("T")[0]} ${x.startTime.split(":")[0]}:${
                    x.startTime.split(":")[1]
                  }:00`
                ).getTime() +
                  5 * 3600000 +
                  1800000
              ).days === 0 &&
              getDaysToGo(
                new Date(
                  `${x.examDate.split("T")[0]} ${x.startTime.split(":")[0]}:${
                    x.startTime.split(":")[1]
                  }:00`
                ).getTime() +
                  5 * 3600000 +
                  1800000
              ).hours === 0 &&
              getDaysToGo(
                new Date(
                  `${x.examDate.split("T")[0]} ${x.startTime.split(":")[0]}:${
                    x.startTime.split(":")[1]
                  }:00`
                ).getTime() +
                  5 * 3600000 +
                  1800000
              ).minutes === 0 ? (
              <div className="exam-info-apply">
                <Button variant="contained" onClick={showHandler}>
                  Apply Now
                </Button>
                {modalShow && (
                  <ModalAccess
                    studentID={x.studentID}
                    examID={x.examID}
                    onConfirm={showHandler}
                  />
                )}
              </div>
            ) : (
              <div className="exam-info-time">
                <h3>Remaining Time</h3>
                <Timer date={x.examDate} hours={x.startTime} />
              </div>
            )}

            <div className="exam-info-detail">
              <h5>{x.subject}</h5>
              {/* <p>max time : {x.duration} hr</p> */}
              <p>Exam Date : {x.examDate.split('T')[0]}</p>

            </div>
            <div className="exam-info-date">
              <p>Start Time : {x.startTime}</p>
              <p>End Time : {x.endTime}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExamInfo;
