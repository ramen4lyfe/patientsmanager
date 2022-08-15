import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link, useParams, useNavigate} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
// import ShortListData from "./data/ShortListData";
import PatientList from './PatientList';


const ShortList = (props) => {
  
  const [patientData, setPatientData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/patient")
      .then((response) => {
          // console.log('response data',response.data);
          setPatientData(response.data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, []);

  const idList = patientData.map(patient => {
    // const name = patientData[id].name
    console.log('hi',patient.firstName)
  })

  
return (
  <div className="container-fluid-md d-md-flex justify-content-center align-item-center">
    <h2>Short List</h2>
    {/* <div className="p-2">
      <h4>Details about: {patient.firstName} {patient.lastName}</h4>
      <Card style={{ width: 'auto' }}>
        <Card.Header>{patient.firstName} {patient.lastName}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Gender: {patient.gender}</ListGroup.Item>
          <ListGroup.Item>Age: {patient.age}</ListGroup.Item>
          <ListGroup.Item>DOB: {moment(patient.DOB).format('MMMM Do, YYYY')}</ListGroup.Item>
          <ListGroup.Item>Appointment Type: {patient.appointmentType}</ListGroup.Item>
          <ListGroup.Item>Discussion Topic: {patient.discussionTopic}</ListGroup.Item>
          <ListGroup.Item>Summary: {patient.summary}</ListGroup.Item>
        </ListGroup>
      </Card>
      <Link to={`/api/patient/update/${patient._id}`} className="btn btn-warning m-2">Update Record</Link>
      <Button variant="danger" onClick={handleShow}>Delete Record</Button>
    </div> */}
  </div>
  )
};

export default ShortList;
