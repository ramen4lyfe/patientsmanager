import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CreatePatient = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLasttName] = useState("");
    const [DOB, setDOB] = useState("");
    const [age, setAge] = useState("");
    const [appointmentType, setAppointmentType] = useState("");
    const [discussionTopic, setDiscussionTopic] = useState("");
    const [summary, setSummary] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/patient", {firstName, lastName, DOB, age, appointmentType, discussionTopic, summary})
            .then(response => {
                console.log(response);
                navigate("api/patient/list");
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.error.errors);
            });
    };

  return (
    <div>CreatePatient</div>
  )
}

export default CreatePatient