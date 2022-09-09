import React,{useState, useEffect, useContext} from 'react';
import PatientContext from '../../context/PatientContext';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import {Link, useParams, useNavigate} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const DetailsModal = () => {
    const [patientData, setPatientData] = useContext(PatientContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {id} = useParams();
    // const [patient, setPatient] = useState({});
    // const navigate = useNavigate(); 

    // useEffect(() => {
    //   axios.get(`http://localhost:8000/api/patient/details/${id}`)
    //     .then((res) => {
    //         console.log(res.data);
    //         setPatient(res.data);
    //     })
    //     .catch((err)=>console.log(err));
    // }, [id])
    return (
    <>
        <Button onClick={handleShow} className="btn btn-warning btn-sm m-1">
        View
        </Button>

        <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
            <Modal.Title>Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* <UpdatePatient /> */}
        <Card style={{ width: 'auto' }}>
            <Card.Header>{patientData.firstName} {patientData.lastName}</Card.Header>
            {/* <ListGroup variant="flush">
            <ListGroup.Item>Gender: {patient.gender}</ListGroup.Item>
            <ListGroup.Item>Age: {patient.age}</ListGroup.Item>
            <ListGroup.Item>DOB: {moment(patient.DOB).format('MMMM Do, YYYY')}</ListGroup.Item>
            <ListGroup.Item>Appointment Type: {patient.appointmentType}</ListGroup.Item>
            <ListGroup.Item>Discussion Topic: {patient.discussionTopic}</ListGroup.Item>
            <ListGroup.Item>Summary: {patient.summary}</ListGroup.Item>
            </ListGroup> */}
            </Card>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            {/* <Button variant="primary" onClick={handleSubmit}>Update</Button> */}
        </Modal.Footer>
        </Modal>
    </>
    )
}

export default DetailsModal