import {React, useState, useEffect} from 'react'
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate, Link } from 'react-router-dom';



const SearchBox = () => {
    const {firstName} = useParams();
    const [search, setSearch] = useState("")
    const [patientData, setPatientData] = useState({})

    function searchForPatient(event) {
        // Handle the correct API call
        axios.get(`http://localhost:8000/api/patient/${search}`)
        .then(function(response){
            setPatientData(response.data)
            // console.log(patientData)
        })
        .catch((err) => {
            console.log(err.response.data.error.errors);
        })
    }
    console.log(patientData)

  return (
    <div className="row justify-content-center align-items-center">
      <InputGroup className="col-6">
        <FormControl
            placeholder="Search for patient"
            aria-label="Search"
            aria-describedby="basic-addon2"
        //   value={''}
            onChange={e => setSearch(e.target.value)}
        />
        {/* <Button 
            variant="outline-secondary" 
            id="button-addon2" 
            onClick={e => searchForPatient(e)}>
          Search
        </Button> */}
      </InputGroup>
    </div>
  )
}

export default SearchBox