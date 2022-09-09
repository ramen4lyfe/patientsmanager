import React, { useState,useEffect, Component } from 'react';
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
import PatientContext from './context/PatientContext';
import CreateModal from './components/modals/CreateModal';
import ContextTest from './components/ContextTest';

// use a class allows for dynamic and interactive data
class App extends React.Component {
render() {
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
                  <Route path="api/patient/shortlist" element={<ShortList />} />
                  <Route path="api/patient/list" element={<PatientList />} />
                  <Route path="api/patient/new" element={<CreatePatient />} />
                  <Route path="api/patient/update/:id" element={<UpdatePatient />} />
                  <Route path="api/patient/details/:id" element={<ViewPatient />} />
                  <Route path="api/patient/new" element={<CreateModal />} />
                  <Route path="api/patient/test" element={<ContextTest />} />
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
};

export default App;
