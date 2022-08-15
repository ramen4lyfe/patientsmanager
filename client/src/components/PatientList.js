import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'; 
import moment from 'moment';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ShortListData from "./data/ShortListData";
import { useParams } from 'react-router-dom';

// import SearchBox from './SearchBox';


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


    const {firstName} = useParams();
    const [search, setSearch] = useState("")
    const [patientSearchData, setPatientSearchData] = useState({})

    function searchForPatient(event) {
        // Handle the correct API call
        axios.get(`http://localhost:8000/api/patient/${search}`)
        .then(function(response){
            setPatientData(response.data)
            // console.log(patientData)
        })
        .catch((err) => {
            console.log(err.response.data.error.errors);
        })
    }
    console.log(patientData)


  return (
    <div className="container">
        <div className="row">
            <div className="mt-2">
                {/* <h3>Patients List</h3> */}
                {/* <SearchBox /> */}

                <div className="row justify-content-center align-items-center">
                  <InputGroup className="col-6">
                    <FormControl
                        placeholder="Search for patient"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    //   value={''}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {/* <Button 
                        variant="outline-secondary" 
                        id="button-addon2" 
                        onClick={e => searchForPatient(e)}>
                      Search
                    </Button> */}
                  </InputGroup>
                </div>



                <table className="table table-hover mt-3 align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Full Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Age</th>
                            <th scope="col">Appointment Type</th>
                            <th scope="col">Discussion Topic</th>
                        </tr>
                    </thead>

                    <tbody className="table-group-divider">
                        {patientData.filter((patient) => {
                          return search === '' 
                          ? patient 
                          : patient.firstName.toLowerCase().includes(search)
                        })
                        .map((patient,index) => {
                            return(
                                <tr key={patient._id}>
                                    <td>{patient.firstName} {patient.lastName}</td>
                                    <td>{patient.gender}</td>
                                    <td>{moment(patient.DOB).format('MMMM Do, YYYY')}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.appointmentType}</td>
                                    <td>{patient.discussionTopic}</td>
                                    <td>
                                        <Link to={`/api/patient/details/${patient._id}`} className="btn btn-info btn-sm m-2">Details</Link>
                                        <Link to={`/api/patient/update/${patient._id}`} className="btn btn-warning btn-sm m-2">Update</Link>
                                        {/* <Link to={`api/patient/shortlist/${patient._id}`} className="btn btn-warning btn-sm m-2">Add</Link> */}
                                        {/* <button onClick={() => onAdd(patient._id)} className="btn btn-success btn-sm m-2">Add to Short List</button> */}
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