import {React,useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function getAge(dateString) {
        const today = new Date()
        const birthDate = new Date(dateString)
        const autoAge = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
    {
        autoAge--
    }
    return autoAge
    }

const CreateForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLasttName] = useState("");
    const [gender, setGender] = useState("");
    const [DOB, setDOB] = useState("");
    const [age, setAge] = useState("");
    const [appointmentType, setAppointmentType] = useState("");
    const [discussionTopic, setDiscussionTopic] = useState("");
    const [summary, setSummary] = useState("");
    const [errors, setErrors] = useState("");

    const navigate = useNavigate();

    // const navigate = useNavigate(); // cannot use navigate inside a modal

    // need to handle submit and post onto list
    const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/patient", {firstName, lastName, gender, DOB, age, appointmentType, discussionTopic, summary})
        .then(response => {
            console.log(response);
            navigate("/api/patient/list");
        })
        .catch((err) => {
            console.log(err)
            setErrors(err.response.data.error.errors);
        });

    
};

  return (
    <form onSubmit={handleSubmit}>

            <input 
                type="text"
                className="form-control mb-3"
                placeholder='First Name'
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
            />
            {errors.firstName ? <p className="text-danger">{errors.firstName.message}</p> : null}

            <input 
                type="text"
                className="form-control mb-4"
                placeholder='Last Name'
                onChange={(e) => setLasttName(e.target.value)}
                value={lastName}
            />
            {errors.lastName ? <p className="text-danger">{errors.lastName.message}</p> : null}
        
            <select 
                value={gender} 
                class="form-select mb-4" 
                aria-label="Default select example" 
                onChange={(e) => setGender(e.target.value)}>
                <option selected>Select a gender </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            {errors.gender ? <p className="text-danger">{errors.gender.message}</p> : null}

            <input 
                type="text"
                placeholder='Date of Birth'
                onFocus={(e) => (e.target.type="date")} // using onFocus so I can sue placeholder online 53
                onBlur={(e) => (e.target.type = "text")}
                className="form-control mb-4"
                onChange={(e) => setDOB(e.target.value)}
                value={DOB}
            />
            {errors.DOB ? <p className="text-danger">{errors.DOB.message}</p> : null}
            
            <input 
                type="number"
                placeholder='Age'
                className="form-control mb-4"
                // onChange={(e) => setAge(e.target.value)}
                // onChange={getAge()}
                value={age}
            />
            {errors.age ? <p className="text-danger">{errors.age.message}</p> : null}

            <select 
            value={appointmentType} 
            class="form-select mb-4" 
            aria-label="Default select example" 
            onChange={(e) => setAppointmentType(e.target.value)}>
                <option selected>Select Apt Type</option>
                <option value="Initial">Initial</option>
                <option value="Annual">Annual</option>
                <option value="Basic Follow Up">Basic Follow Up</option>
                <option value="Post Discharge">Post Discharge</option>
                <option value="Post Discharge Follow Up">Post Discharge Follow Up</option>
            </select>  

            <input 
                type="text"
                className="form-control mb-4"
                placeholder='Discussion Topic'
                onChange={(e) => setDiscussionTopic(e.target.value)}
                value={discussionTopic}
            />

            <textarea 
                type="text"
                placeholder='Summary'
                rows="5"
                className="form-control mb-4"
                onChange={(e) => setSummary(e.target.value)}
                value={summary}
            />
        <button type="submit" className="btn btn-primary btn-block mb-2">Create Patient</button>
        
    </form>
  )
}

export default CreateForm