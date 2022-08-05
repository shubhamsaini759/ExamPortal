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

  const [ pendingPage,setPendingPage] = useState(0);
  const [ approvedPage,setApprovedPage] = useState(0);
  const [ declinedPage,setDeclinedPage] = useState(0);

  const [ ptotalPage,setPTotalPage] = useState(0);
  const [ atotalPage,setATotalPage] = useState(0);
  const [ dtotalPage,setDTotalPage] = useState(0);


  // console.log(approvedPage,'approvedpage')
  // console.log(declinedPage,'declinedPage')

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
                  .get("/admin/examiners?status=pending&pageSize=10&pageIndex=" + pendingPage, {
                  headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
                  })
                  .then((result) => {
                    setPTotalPage(result.data.data.totalPages)
                    setPending(result.data.data.Examiners)
                  })
                  .catch((err) => console.log(err, "pending"));
    } else if (path === "approved") {

      // approved examiners

                  api
                  .get("/admin/examiners?status=approved&pageSize=10&pageIndex=" + approvedPage, {
                  headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
                  })
                  .then((result) => {
                    setATotalPage(result.data.data.totalPages)
                    setApproved(result.data.data.Examiners)
                                  // console.log(result.data.data,'resultdata')
                  })

                  .catch((err) => console.log(err, "approved"));
    } else if (path === "declined") {

      // declined examiners

                api
                  .get("/admin/examiners?status=declined&pageSize=10&pageIndex=" + declinedPage, {
                  headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
                  })
                  .then((result) =>{ 
                    setDTotalPage(result.data.data.totalPages)
                    setDeclined(result.data.data.Examiners)
                  })
                  .catch((err) => console.log(err, "declined"));
            }
  }, [path,pendingPage,approvedPage,declinedPage]);

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
            {path === "pending" && <RequestExaminer setPage={setPendingPage} total={ptotalPage} pageNum={pendingPage} pending={pending} updateId={pendingHandler} />}
            {path === "approved" && <ApprovedRequest setPage={setApprovedPage} total={atotalPage} pageNum={approvedPage} approved={approved} updateId={approvedHandler}  />}
            {path === "declined" && <DeclinedExaminer setPage={setDeclinedPage} declined={declined} pageNum={declinedPage} updateId={declinedHandler} total={dtotalPage} />}
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
