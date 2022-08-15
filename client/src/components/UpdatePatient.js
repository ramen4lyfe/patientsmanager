import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdatePatient = () => {
  const {id} = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [age, setAge] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [discussionTopic, setDiscussionTopic] = useState("");
  const [summary, setSummary] = useState("");
  const navigate = useNavigate();
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
      navigate("/api/patient/list");
  })
  .catch((err) => {
      console.log(err.response.data.error.errors);
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
                        
                        <label className="mb-2" htmlFor="lastName">Gender: </label>
                            <input 
                                type="text"
                                className="form-control mb-4"
                                onChange={(e) => setGender(e.target.value)}
                                value={gender}
                            />
                            {errors.gender ? <p className="text-danger">{errors.gender.message}</p> : null}

                        <label className="mb-2" htmlFor="DOB">Date of Birth: </label>
                            <input 
                                type="date"
                                className="form-control mb-4"
                                onChange={(e) => setDOB(e.target.value)}
                                value={DOB}
                            />
                            {errors.DOB ? <p className="text-danger">{errors.DOB.message}</p> : null}
                    </div>
                    <div className="form-group col-6 mb-4 mt-2">
                        <label className="mb-2" htmlFor="age">Age: </label>
                            <input 
                                type="number"
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
                            <textarea 
                                type="textarea"
                                rows="5"
                                className="form-control mb-4"
                                onChange={(e) => setSummary(e.target.value)}
                                value={summary}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Update</button>
                    <Link to="/api/patient/list" className="btn btn-secondary">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdatePatient;