import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link, useParams, useNavigate} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';
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
    return(
      // <li key={patient._id}>{patient.firstName}</li>
      console.log()
    )
  })

  
return (
  <div className="container-fluid-md d-md-flex justify-content-center align-item-center">
    <h2>Short List</h2>
     <div className="p-2">
      {idList}
       {/* <h4>Details about: {idList.firstName} {idList.lastName}</h4>
      <Card style={{ width: 'auto' }}>
        <Card.Header>{idList.firstName} {idList.lastName}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Gender: {idList.gender}</ListGroup.Item>
          <ListGroup.Item>Age: {idList.age}</ListGroup.Item>
          <ListGroup.Item>DOB: {moment(idList.DOB).format('MMMM Do, YYYY')}</ListGroup.Item>
          <ListGroup.Item>Appointment Type: {idList.appointmentType}</ListGroup.Item>
          <ListGroup.Item>Discussion Topic: {idList.discussionTopic}</ListGroup.Item>
          <ListGroup.Item>Summary: {idList.summary}</ListGroup.Item>
        </ListGroup>
      </Card>
      <Link to={`/api/patient/update/${idList._id}`} className="btn btn-warning m-2">Update Record</Link>  */}
      {/* <Button variant="danger" onClick={handleShow}>Delete Record</Button> */}
    </div> 
  </div>
  )
};

export default ShortList;
