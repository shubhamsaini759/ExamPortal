import React, { useEffect, useState } from "react";
import "./Admin.css";

import AdminNav from "../UserNav/UserNav";
import AdminSideBar from "./AdminSidebar/AdminSideBar";
import HomeFooter from "../../Home/HomeGlobal/HomeFooter/HomeFooter";
import RequestExaminer from "./AdminView/RequestExaminer";
import ApprovedRequest from "./AdminView/ApprovedRequest";

import api from "../../../Utils/api";
import DeclinedExaminer from "./AdminView/DeclinedExaminer";
import { useLocation } from "react-router-dom";

import { useNavigate } from 'react-router-dom'

const Admin = () => {
  
  const navigate = useNavigate();
      
  const [admin, setAdmin] = useState({});
  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const [declined, setDeclined] = useState([]);

  const { pathname } = useLocation();

  const path = pathname.split("/")[2];
    
  useEffect(() => {
       // Admin Details

                  api
                  .get("/admin/dashboard", {
                  headers: {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
                  })
                  .then((result) => setAdmin(result.data.data.adminDetails))
                  .catch((err) =>{ console.log(err)
                                  if(err.response.data.message === 'UNAUTHORIZED_ACCESS' || err.response.data.message === 'INVALID_TOKEN' ){
                                      navigate('/');
                                      alert('SESSION EXPIRED PLEASE LOGIN AGAIN')
                                  }
                                });

    if (path === "pending" ) {

      // pending request

                  api
                  .get("/admin/examiners/pending", {
                  headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
                  })
                  .then((result) => setPending(result.data.data.Examiners))
                  .catch((err) => console.log(err, "pending"));
    } else if (path === "approved") {

      // approved examiners

                  api
                  .get("/admin/examiners/approved", {
                  headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
                  })
                  .then((result) => setApproved(result.data.data.Examiners))
                  .catch((err) => console.log(err, "approved"));
    } else if (path === "declined") {

      // declined examiners

                  api
                  .get("/admin/examiners/declined", {
                  headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
                  })
                  .then((result) => setDeclined(result.data.data.Examiners))
                  .catch((err) => console.log(err, "declined"));
            }
  }, [path]);

// pending update
      const pendingHandler = (id) =>{
            let pendingUpdate = pending.filter(x => x._id !== id);
            setPending(pendingUpdate)
      }

// approved update
      const approvedHandler = (id) =>{
            let approvedUpdate = approved.filter( x => x._id !== id);
            setApproved(approvedUpdate)
      }


// declined update
      const declinedHandler = (id) =>{
            let declinedUpdate = declined.filter(x => x._id !== id);
            setDeclined(declinedUpdate);
      }




  return (
    <>
 
      <div className="admin">
        <div className="admin-left">
          <AdminSideBar admin={admin} />
        </div>
        <div className="admin-right">
          <div className="admin-right-top">
            <AdminNav />
          </div>
          <div className="admin-viewPort">
            {path === "pending" && <RequestExaminer pending={pending} updateId={pendingHandler} />}
            {path === "approved" && <ApprovedRequest approved={approved} updateId={approvedHandler}  />}
            {path === "declined" && <DeclinedExaminer declined={declined} updateId={declinedHandler} />}
          </div>
        </div>
      </div>
      <div>
        <HomeFooter />
      </div> 
    </>
  );
};

export default Admin;
