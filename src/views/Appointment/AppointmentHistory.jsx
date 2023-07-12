import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const AppointmentHistory = () => {
  const { userId } = useSelector((state) => ({ userId: state.user.userId }));
   useEffect(()=>{
    axios({method:"GET",url:`/user`})
   },[]);
  return <div>{userId}</div>;
};

export default AppointmentHistory;
