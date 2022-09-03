import {React,useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';


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
    // const navigate = useNavigate(); // cannot use navigate inside a modal

    // need to handle submit and post onto list

  return (
    <form>
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
            <select value={gender} class="form-select mb-4" aria-label="Default select example" onChange={(e) => setGender(e.target.value)}>
                <option selected> </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            {errors.gender ? <p className="text-danger">{errors.gender.message}</p> : null}

        <label className="mb-2" htmlFor="DOB">Date of Birth: </label>
            <input 
                type="date"
                className="form-control mb-4"
                onChange={(e) => setDOB(e.target.value)}
                value={DOB}
            />
            {errors.DOB ? <p className="text-danger">{errors.DOB.message}</p> : null}
            
        <label className="mb-2" htmlFor="age">Age: </label>
            <input 
                type="number"
                className="form-control mb-4"
                onChange={(e) => setAge(e.target.value)}
                value={age}
            />
            {errors.age ? <p className="text-danger">{errors.age.message}</p> : null}

        <label className="mb-2" htmlFor="appointmentType">Appointment Type: </label>
            <select value={appointmentType} class="form-select mb-4" aria-label="Default select example" onChange={(e) => setAppointmentType(e.target.value)}>
                <option selected> </option>
                <option value="Initial">Initial</option>
                <option value="Annual">Annual</option>
                <option value="Basic Follow Up">Basic Follow Up</option>
                <option value="Post Discharge">Post Discharge</option>
                <option value="Post Discharge Follow Up">Post Discharge Follow Up</option>
            </select>  

        <label className="mb-2" htmlFor="discussionTopic">Discussion Topic: </label>
            <input 
                type="text"
                className="form-control mb-4"
                onChange={(e) => setDiscussionTopic(e.target.value)}
                value={discussionTopic}
            />

        <label className="mb-2" htmlFor="summary">Summary: </label>
            <textarea 
                type="text"
                rows="5"
                className="form-control mb-4"
                onChange={(e) => setSummary(e.target.value)}
                value={summary}
            />
        
    </form>
  )
}

export default CreateForm