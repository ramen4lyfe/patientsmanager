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


  const listItems = patientData.map((patient) =>
   <Card style={{ width: 'auto' }} key={patient._id}>
   <Card.Header>{patient.firstName} {patient.lastName}</Card.Header>
   <ListGroup variant="flush">
     <ListGroup.Item>Age: {patient.age}</ListGroup.Item>
     <ListGroup.Item>first name: {patient.summary}</ListGroup.Item>
   </ListGroup>
 </Card>
);
  return (
    // <div>ShortList You mom</div>
    <ul>{listItems}</ul>
  )
}

export default ShortList;