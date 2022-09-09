import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'; 
import moment from 'moment';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ShortListData from "./data/ShortListData";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import PatientContext from '../context/PatientContext';
import UpdateModal from './modals/UpdateModal';
import DetailsModal from './modals/DetailsModal';

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


    const [search, setSearch] = useState("")
    // const [patientSearchData, setPatientSearchData] = useState({})

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

    const {id} = useParams();
    function addShortList(event) {
    axios.get(`http://localhost:8000/api/patient/shortlist/${id}`)
    .then(function(response){
        setPatientData(response.data)
        const shortList = [{response}]
        // add to short list 
        console.log(shortList)
    })
    .catch((err) => {
        console.log(err.response.data.error.errors);
    })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="mt-2">

                    <div className="row justify-content-center align-items-center">
                    <InputGroup className="col-6">
                        <FormControl
                            placeholder="Search for patient"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        //   value={''}
                            onChange={e => setSearch(e.target.value)}
                        />
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
                                    <td>{moment(patient.DOB).format('MM/DD/YYYY')}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.appointmentType}</td>
                                    <td>{patient.discussionTopic}</td>
                                    <td>
                                        <Link to={`/api/patient/details/${patient._id}`} className="btn btn-info btn-sm m-1">Details</Link>
                                        <Link to={`/api/patient/update/${patient._id}`} className="btn btn-warning btn-sm m-1">Update</Link>
                                        <UpdateModal />
                                        {/* <DetailsModal /> */}
                                        <Button className="btn-sm m-1" onClick={(e) => addShortList(e)}>+</Button>
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