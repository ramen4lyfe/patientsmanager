import React, {useContext, useState, useEffect} from 'react'
import PatientContext from '../context/PatientContext'

const ContextTest = () => {
    const { patientData } = useContext(PatientContext)
  return (
    <ul>
        <li>{patientData.firstName}</li>
    </ul>
  )
}

export default ContextTest