import { useState,useEffect, Component } from 'react';
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
import PatientContext from './context/PatientContext';
import CreateModal from './components/modals/CreateModal';


function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="p-4">
          <div className="d-flex justify-content-between mb-3">
            <h1>Track@</h1>
            <CreateModal />
          </div>
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
