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
    <div className="container ">
        <div className="row">
            <div className="mt-2">
                <h3>Add a new patient</h3>
                <form onSubmit={handleSubmit} className="row">
                    <div className="form-group col-6 mb-4 mt-2">
                        <label className="mb-2" htmlFor="firstName">First Name: </label>
                            <input 
                                type="text"
                                className="form-control mb-4"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                            />
                            {errors.firstName ? <p className="text-danger">{errors.firstName.message}</p> : null}
                        
                        <label className="mb-2" htmlFor="lastName">Last Name: </label>
                            <input 
                                type="text"
                                className="form-control mb-4"
                                onChange={(e) => setLasttName(e.target.value)}
                                value={lastName}
                            />
                            {errors.lastName ? <p className="text-danger">{errors.lastName.message}</p> : null}

                        <label className="mb-2" htmlFor="DOB">Date of Birth: </label>
                            <input 
                                type="textarea"
                                className="form-control mb-4"
                                onChange={(e) => setDOB(e.target.value)}
                                value={DOB}
                            />
                            {errors.DOB ? <p className="text-danger">{errors.DOB.message}</p> : null}
                    </div>
                    <div className="form-group col-6 mb-4 mt-2">
                        <label className="mb-2" htmlFor="age">Age: </label>
                            <input 
                                type="text"
                                className="form-control mb-4"
                                onChange={(e) => setAge(e.target.value)}
                                value={age}
                            />
                            {errors.age ? <p className="text-danger">{errors.age.message}</p> : null}

                        <label className="mb-2" htmlFor="appointmentType">Appointment Type: </label>
                            <input 
                                type="text"
                                className="form-control mb-4"
                                onChange={(e) => setAppointmentType(e.target.value)}
                                value={appointmentType}
                            />

                        <label className="mb-2" htmlFor="discussionTopic">Discussion Topic: </label>
                            <input 
                                type="text"
                                className="form-control mb-4"
                                onChange={(e) => setDiscussionTopic(e.target.value)}
                                value={discussionTopic}
                            />

                        <label className="mb-2" htmlFor="summary">Summary: </label>
                            <input 
                                type="text"
                                className="form-control mb-4"
                                onChange={(e) => setSummary(e.target.value)}
                                value={summary}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-2">Create Patient</button>
                    <Link to="/api/patient/list" className="btn btn-secondary btn-block">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreatePatient;