import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'; 



const PatientList = () => {
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

  const handleAddShortList = (idFromBelow) => {
    axios
    .get(`http://localhost:8000/api/patient/${idFromBelow}`)
    .then((response) => {
        console.log("Selected for short list");
        console.log(response);
        //filtered out recently adopted pet
        const selectedRecord = patientData.filter((patient) => {
            return patient._id !== idFromBelow;
        });
        setPatientData(selectedRecord);
    })
    .catch((err) => {
        console.log("Error deleting", err.response);
    });
};

  return (
    <div className="container">
        <div className="row">
            <div className="mt-2">
                <h3>These mofos</h3>
                <table className="table table-hover mt-3 align-middle">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Age</th>
                            <th scope="col">Appointment Type</th>
                            <th scope="col">Discussion Topic</th>
                        </tr>
                    </thead>

                    <tbody className="table-group-divider">
                        {patientData.map((patient,index) => {
                            return(
                                <tr key={patient._id}>
                                    <td>{patient.firstName}</td>
                                    <td>{patient.lastName}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.DOB}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.appointmentType}</td>
                                    <td>{patient.discussionTopic}</td>
                                    <td>
                                        <Link to={`/api/patient/details/${patient._id}`} className="btn btn-info btn-sm m-2">Details</Link>
                                        <Link to={`/api/patient/update/${patient._id}`} className="btn btn-warning btn-sm m-2">Edit</Link>
                                        <button onClick={() => handleAddShortList(patient._id)} className="btn btn-success btn-sm m-2">Add to Short List</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
};

export default PatientList;