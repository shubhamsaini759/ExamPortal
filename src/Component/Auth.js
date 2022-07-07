// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

// const Auth = () => {
//     const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);
//     const navigate = useNavigate();

//     useEffect(()=> {
//         return isLoggedIn ? <Outlet /> : navigate("/");
//     }, [isLoggedIn]);

// }

// export default Auth