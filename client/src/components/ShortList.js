import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link, useParams, useNavigate} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';


const ShortList = () => {
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


const patientCard = patientData.map((patient) =>
  <Card className="m-2" style={{ width: '24rem' }} key={patient._id}>
   <Card.Header>{patient.firstName} {patient.lastName}</Card.Header>
   <ListGroup variant="flush">
   <ListGroup.Item>Gender: {patient.gender}</ListGroup.Item>
                    <ListGroup.Item>Age: {patient.age}</ListGroup.Item>
                    <ListGroup.Item>DOB: {patient.DOB}</ListGroup.Item>
                    <ListGroup.Item>Appointment Type: {patient.appointmentType}</ListGroup.Item>
                    <ListGroup.Item>Discussion Topic: {patient.discussionTopic}</ListGroup.Item>
                    <ListGroup.Item>Summary: {patient.summary}</ListGroup.Item>
   </ListGroup>
 </Card>
);
  return (
    <div className="container-fluid-md d-md-flex justify-content-center align-item-center">
      {patientCard}
    </div>
  )
}

export default ShortList;