import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link, useParams, useNavigate} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
// import ShortListData from "./data/ShortListData";
// import PatientList from './PatientList';


const ShortList = (patientData, pickedPatient ) => {
  



  // const idList = pickedPatient.map(id => {
  //   const name = patientData[id].name
  // })


  return (
    <div className="container-fluid-md d-md-flex justify-content-center align-item-center">
      <h2>Short List</h2>
      
    </div>
  )
};

export default ShortList;
