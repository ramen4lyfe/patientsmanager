import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";

// const ShortListData = (idFromBelow) => {
//     const [patientData, setPatientData] = useState([]);
//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/patient/${idFromBelow}`)
//         .then((response) => {
//             console.log("selected for short list");
//             console.log(response);

//             const selectedPatient = patientData.filter((patient) => {
//                 return patient._id !== idFromBelow;
//             });
//             setPatientData(selectedPatient);
//         })
//         .catch((err) => {
//             console.log("Error adding to short list", err.response);
//         });
//     });
// };

const ShortListData = (idFromBelow) => {
    const [patientData, setPatientData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/patient/${idFromBelow}`)
        .then((response) => {
            console.log("selected for short list");
            console.log(response);

            const selectedPatient = patientData.filter((patient) => {
                return patient._id !== idFromBelow;
            });
            setPatientData(selectedPatient);
        })
        .catch((err) => {
            console.log("Error adding to short list", err.response);
        });
    });
};

export default ShortListData;