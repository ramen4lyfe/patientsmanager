import { useState,useEffect } from 'react';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePatient from "./components/CreatePatient";
import UpdatePatient from "./components/UpdatePatient";
import ViewPatient from "./components/ViewPatient";
import PatientList from "./components/PatientList";
import ShortList from "./components/ShortList";
import Nav from "./components/Nav";
import Card from "react-bootstrap/Card";
import ShortListData from "./components/data/ShortListData";
import axios from "axios";


function App() {
  



  // const { patientData } = ShortListData;
  // const [cartItems, setCartItems] = useState([]);  
  // const onAdd = (patientData) => {
  //   const exist = cartItems.find(x => x.id === patientData._id);
  //   if(exist) {
  //     setCartItems(cartItems.map(x => x.id === patientData._id ? {...exist, qty: exist.qty +1} : x));
  //   } else {
  //     setCartItems([...cartItems, { ...exist, qty: 1}]);
  //   }
  // };
  return (
    <div className="container">
      <div className="row">
        <div className="p-4">
          <h1>Track@</h1>
          <BrowserRouter>
            <Card>
              <Card.Header>
                <Nav />
              </Card.Header>
              <Card.Body>
                <Routes>
                  <Route path="api/patient/shortlist/:id" element={<ShortList />} />
                  <Route path="api/patient/list" element={<PatientList />} />
                  <Route path="api/patient/new" element={<CreatePatient />} />
                  <Route path="api/patient/update/:id" element={<UpdatePatient />} />
                  <Route path="api/patient/details/:id" element={<ViewPatient />} />
                </Routes>
              </Card.Body>
            </Card>
          </BrowserRouter>
          {/* <ShortList onAdd={onAdd} cartItems = { cartItems }></ShortList> */}
        </div>
      </div>
    </div>
  );
};

export default App;
