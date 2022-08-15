import {React, useState, useEffect} from 'react'
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


const SearchBox = (props) => {
    const [patientData, setPatientData] = useState([]);


    const onChange = (event) => {
        setPatientData(event.target.value);
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
  return (
    <div className="row justify-content-center align-items-center">
      <InputGroup className="col-6">
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={patientData}
          onChange={onChange}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={() => OnSearch(patientData)}>
          Search
        </Button>
        <div className="dropdown">
          {patientData
            .filter((item) => {
              const searchTerm = patientData.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => OnSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </InputGroup>
      
    </div>
  )
}

export default SearchBox