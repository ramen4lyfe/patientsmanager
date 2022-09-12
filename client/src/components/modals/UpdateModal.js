import {React, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import UpdatePatient from '../UpdatePatient';
import { useParams, useNavigate, Link } from 'react-router-dom';



function UpdateModal () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {id} = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [age, setAge] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [discussionTopic, setDiscussionTopic] = useState("");
  const [summary, setSummary] = useState("");
//   const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
        .get(`http://localhost:8000/api/patient/details/${id}`)
        .then((response) => {
            // console.log(response.data);
            setFirstName(response.data.firstName);
            setLasttName(response.data.lastName);
            setGender(response.data.gender);
            setDOB(response.data.DOB);
            setAge(response.data.age);
            setAppointmentType(response.data.appointmentType);
            setDiscussionTopic(response.data.discussionTopic);
            setSummary(response.data.summary);
        })
        .catch((err) => {
            console.log(err.response.data.error.errors);
            // setErrors(err.response.data.error.errors);
        });
}, [id]);

  const handleSubmit = (e) => {
  e.preventDefault();
  axios
  .put(`http://localhost:8000/api/patient/update/${id}`, {
    firstName, 
    lastName, 
    gender, 
    DOB, 
    age, 
    appointmentType, 
    discussionTopic, 
    summary,  
  })
  .then((response) => {
      console.log(response);
    //   navigate("/api/patient/list");
  })
  .catch((err) => {
      console.log(err.response.data.error.errors);
      setErrors(err.response.data.error.errors);
  });
};


    return (
        <>
        <Button onClick={handleShow} className="btn btn-warning btn-sm m-1">
        Update
        </Button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='xl'
        >
        <Modal.Header closeButton>
            <Modal.Title>Update Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <UpdatePatient />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>Update</Button>
        </Modal.Footer>
        </Modal>
    </>
    )
    }

export default UpdateModal