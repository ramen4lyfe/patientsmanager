import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";

const ShortListData = () => {
    const [patientData, setPatientData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/patient")
        .then((response) => {
            console.log(response.data);
            setPatientData(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
  }, []);
//   return (
//     <div>ShortListData</div>
//   )
}

export default ShortListData;