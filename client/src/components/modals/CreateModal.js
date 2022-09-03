import {React, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateForm from '../forms/CreateForm';
import CreatePatient from '../CreatePatient';
import axios from 'axios';


function CreateModal () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLasttName] = useState("");
    const [gender, setGender] = useState("");
    const [DOB, setDOB] = useState("");
    const [age, setAge] = useState("");
    const [appointmentType, setAppointmentType] = useState("");
    const [discussionTopic, setDiscussionTopic] = useState("");
    const [summary, setSummary] = useState("");
    const [errors, setErrors] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/patient", {firstName, lastName, gender, DOB, age, appointmentType, discussionTopic, summary})
            .then(response => {
                console.log(response);
                // navigate("/api/patient/list");
                // Need to set states
                setFirstName("")
                setLasttName("")
                setGender("")
                setDOB("")
                setAge("")
                setAppointmentType("")
                setDiscussionTopic("")
                setSummary("")
                setShow(false)
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.error.errors);
            });
    };
    return (
        <>
        <Button variant="outline-primary" onClick={handleShow}>
        + Add New Patient
        </Button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
            <Modal.Title>Add New Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CreateForm />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>Add Patient</Button>
        </Modal.Footer>
        </Modal>
    </>
    )
    }

export default CreateModal