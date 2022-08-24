import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PatientContext = createContext()

// const PatientList = () => {
//     const [patientData, setPatientData] = useState([]);
//     useEffect(() => {
//       axios.get("http://localhost:8000/api/patient")
//         .then((response) => {
//             console.log(response.data);
//             setPatientData(response.data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     }, []);
// };

export function PatientProvider({props}) {
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

    const value = patientData.map((patient) => 
    <ul>
    <li>{patient._id}</li>
    <li>{patient.firstName}</li>
    </ul>
    )

    return (
        <PatientContext.Provider value={{ patientData, setPatientData }}>
            {props.children}
        </PatientContext.Provider>
    );
}

export default PatientContext;