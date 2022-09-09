import {React, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateForm from '../forms/CreateForm';
import CreatePatient from '../CreatePatient';
import axios from 'axios';
import UpdatePatient from '../UpdatePatient';


function UpdateModal () {



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
            <UpdatePatient />
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

export default UpdateModal