import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link, useParams, useNavigate} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ShortList = () => {
  const {id} = useParams();
  // const [patient, setPatient] = useState({});
  const navigate = useNavigate(); 

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

  useEffect(() => {
    axios.get(`http://localhost:8000/api/patient/details/${id}`)
      .then((res) => {
          console.log(res);
          console.log(res.data);
          setPatient(res.data);
      })
      .catch((err)=>console.log(err));
  }, [id])

  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ patientData }).map((patient, index) => (
        <Col>
          <Card key={patient._id}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <ListGroup.Item>Gender: {patient.summary}</ListGroup.Item>

              <Card.Text>
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ShortList