import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link, useParams, useNavigate} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import ShortListData from "./data/ShortListData";


const ShortList = (props) => {
  const { patientData } = ShortListData;
  const {cartItems} = props;


  // const {id} = useParams();
  // const [patient, setPatient] = useState({});
  // const navigate = useNavigate(); 
  // useEffect(() => {
  //   axios.get(`http://localhost:8000/api/patient/shortlist/${id}`)
  //     .then((res) => {
  //         console.log(res);
  //         console.log(res.data);
  //         setPatient(res.data);
  //     })
  //     .catch((err)=>console.log(err));
  // }, [id])


  // const [patientData, setPatientData] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/patient")
  //     .then((response) => {
  //         console.log(response.data);
  //         setPatientData(response.data);
  //     })
  //     .catch((err) => {
  //         console.log(err);
  //     });
  // }, []);


// const patientCard = patientData.map((patient) =>
//   <Card className="m-2" style={{ width: '24rem' }} key={patient._id}>
//    <Card.Header>{patient.firstName} {patient.lastName}</Card.Header>
//    <ListGroup variant="flush">
//    <ListGroup.Item>Gender: {patient.gender}</ListGroup.Item>
//                     <ListGroup.Item>Age: {patient.age}</ListGroup.Item>
//                     <ListGroup.Item>DOB: {patient.DOB}</ListGroup.Item>
//                     <ListGroup.Item>Appointment Type: {patient.appointmentType}</ListGroup.Item>
//                     <ListGroup.Item>Discussion Topic: {patient.discussionTopic}</ListGroup.Item>
//                     <ListGroup.Item>Summary: {patient.summary}</ListGroup.Item>
//    </ListGroup>
//  </Card>

// const patientCard = patientData.map((patient) =>
//   <Card className="m-2" style={{ width: '24rem' }} key={patient._id}>
//    <Card.Header>{patient.firstName} {patient.lastName}</Card.Header>
//    <ListGroup variant="flush">
//    <ListGroup.Item>Gender: {patient.gender}</ListGroup.Item>
//                     <ListGroup.Item>Age: {patient.age}</ListGroup.Item>
//                     <ListGroup.Item>DOB: {patient.DOB}</ListGroup.Item>
//                     <ListGroup.Item>Appointment Type: {patient.appointmentType}</ListGroup.Item>
//                     <ListGroup.Item>Discussion Topic: {patient.discussionTopic}</ListGroup.Item>
//                     <ListGroup.Item>Summary: {patient.summary}</ListGroup.Item>
//    </ListGroup>
//  </Card>
// );

// const onAdd = (patientData) => {
//   const exist = patientData.find(x => x.id === patientData._id);
//   if(exist) {
//     setPatientData(patientData.map(x => x.id === patientData._id ? {...exist, qty: exist.qty +1} : x));
//   } else {
//     setPatientData([...patientData, { ...exist, qty: 1}]);
//   }
// };

  return (
    <div className="container-fluid-md d-md-flex justify-content-center align-item-center">
      {/* {patientCard} */}
      {cartItems.length === 0 && <div>Cart is empty</div>}
      
    </div>
  )
};

export default ShortList;
