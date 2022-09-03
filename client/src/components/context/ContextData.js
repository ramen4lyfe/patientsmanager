import {React, useContext} from 'react'
import PatientContext from '../../context/PatientContext'

const ContextData = () => {

    const {patientData, setPatientData} = useContext(PatientContext)

  return (
    <div></div>
  )
}

export default ContextData