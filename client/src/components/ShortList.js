import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link, useParams, useNavigate} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import ShortListData from "./data/ShortListData";
import PatientList from './PatientList';


const ShortList = (props) => {
  const { patientData } = ShortListData;
  const {cartItems} = props;


  return (
    <div className="container-fluid-md d-md-flex justify-content-center align-item-center">
      {/* {patientCard} */}
      {/* {cartItems.length === 0 && <div>Cart is empty</div>} */}
      
    </div>
  )
};

export default ShortList;
