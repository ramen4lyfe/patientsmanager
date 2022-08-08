import React,{useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ViewPatient = (props) => {
  const {id} = useParams();
  const [patient, setPatient] = useState({});
  const navigate = useNavigate(); 

  // for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
      axios.get(`http://localhost:8000/api/patient/details/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setPatient(res.data);
        })
        .catch((err)=>console.log(err));
    }, [id])

    const handleDelete = (idFromBelow) => {
      axios
      .delete(`http://localhost:8000/api/patient/${idFromBelow}`)
      .then((response) => {
          console.log("Patient removed from DB");
          console.log(response);
          navigate("/api/patient/list");
      })
      .catch((err) => {
          console.log("Error deleting", err.response);
      });
  };

  return (
    <div className="container">
        <div className="row">
            <div className="p-2">
                <h4>Details about: {patient.firstName} {patient.lastName}</h4>
                <Card style={{ width: 'auto' }}>
                  {/* <Card.Header>{patient.firstName} {patient.lastName}</Card.Header> */}
                  <ListGroup variant="flush">
                    <ListGroup.Item>Gender: {patient.gender}</ListGroup.Item>
                    <ListGroup.Item>Age: {patient.age}</ListGroup.Item>
                    <ListGroup.Item>DOB: {patient.DOB}</ListGroup.Item>
                    <ListGroup.Item>Appointment Type: {patient.appointmentType}</ListGroup.Item>
                    <ListGroup.Item>Discussion Topic: {patient.discussionTopic}</ListGroup.Item>
                    <ListGroup.Item>Summary: {patient.summary}</ListGroup.Item>
                  </ListGroup>
                </Card>
                <Link to={`/api/patient/update/${patient._id}`} className="btn btn-warning m-2">Update Record</Link>
                <Button variant="danger" onClick={handleShow}>Delete Record</Button>
            </div>
            <>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Deleting this record is permanant. This CANNOT be undone.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(patient._id)}>Understood, permanenly delete this record</Button>
                </Modal.Footer>
              </Modal>
            </>
        </div>
    </div>
  )
};

export default ViewPatient;