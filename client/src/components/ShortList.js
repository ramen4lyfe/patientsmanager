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
  // const {id} = useParams();
  // const [patient, setPatient] = useState({});
  // const navigate = useNavigate(); 

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

  const renderCard = (patient, index) => {
    return (
      <Card style={{ width: '18rem' }} key={patient._id}>
      <Card.Body>
        <Card.Title>{patient.firstName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    )
  }
  // useEffect(() => {
  //   axios.get(`http://localhost:8000/api/patient/details/${id}`)
  //     .then((res) => {
  //         console.log(res);
  //         console.log(res.data);
  //         setPatientData(res.data);
  //     })
  //     .catch((err)=>console.log(err));
  // }, [id])

  return 
    {patientData.map(renderCard)}
    // <Row xs={1} md={2} className="g-4">
    //   {Array.from({ length: 4 }).map((patient, idx) => (
    //     <Col>
    //       <Card>
    //         <Card.Img variant="top" src="holder.js/100px160" />
    //         <Card.Body>
    //           <Card.Title>Card title</Card.Title>
    //           <Card.Text>
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
  
};

export default ShortList;