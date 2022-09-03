import {React, createContext} from 'react';
import axios from 'axios';

export const PatientContext = createContext(null) //null is the default value

 const PatientContextProvider =(props) => {
  const [patientData, setPatientData] = useState([]);
  useEffect(() => {
  axios.get("http://localhost:8000/api/patient")
      .then((response) => {
          console.log(response.data);
          setPatientData(response.data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, []);

  return (
    <PatientContext.Provider value = {patientData}>
      {props.children}
    </PatientContext.Provider>
  )
}

export default PatientContextProvider