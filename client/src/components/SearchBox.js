import {React, useState, useEffect} from 'react'
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate, Link } from 'react-router-dom';



const SearchBox = () => {
    /*const [patientData, setPatientData] = useState([]);

    const onChange = (event) => {
        setPatientData(event.target.value);
        console.log(event.target.value)
    };

    const OnSearch = (searchTerm) => {
        setPatientData(searchTerm);
        useEffect(() => {
            axios.get("http://localhost:8000/api/patient")
              .then((response) => {
                  console.log(response.data);
                  setPatientData(response.data);
              })
              .catch((err) => {
                  console.log(err);
              });
          }, []);        console.log("search ", searchTerm);
    };  
    */
    const {firstName} = useParams();
    const [searchText, setSearchText] = useState("")
    const [patientData, setPatientData] = useState({})

    function searchForPatient(event) {
        // Set up the correct API call

        // Handle the correct API call
        axios.get(`http://localhost:8000/api/patient/${searchText}`)
        .then(function(response){
            setPatientData(response.data)
            // console.log(patientData)
        })
        .catch((err) => {
            console.log(err.response.data.error.errors);
            // setErrors(err.response.data.error.errors);
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
            onChange={e => setSearchText(e.target.value)}
        />
        <Button 
            variant="outline-secondary" 
            id="button-addon2" 
            onClick={e => searchForPatient(e)}>
          Search
        </Button>
      </InputGroup>
      
    </div>
  )
}

export default SearchBox