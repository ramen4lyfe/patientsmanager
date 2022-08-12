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

// const ViewPatient = (props) => {
//     const {id} = useParams();
//     const [patient, setPatient] = useState({});
//     const navigate = useNavigate(); 
  
//     // for modal
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/patient/details/${id}`)
//           .then((res) => {
//               console.log(res);
//               console.log(res.data);
//               setPatient(res.data);
//           })
//           .catch((err)=>console.log(err));
//       }, [id])
  
      
//     };
// return (

// );

export default ShortListData;