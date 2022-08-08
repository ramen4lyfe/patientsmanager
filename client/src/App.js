import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePatient from "./components/CreatePatient";
import UpdatePatient from "./components/UpdatePatient";
import ViewPatient from "./components/ViewPatient";
import PatientList from "./components/PatientList";
import Nav from "./components/Nav";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="Container-fluid">
      <div className="row">
        <div className="p-4">
          <h1>Patients Manager</h1>
          <BrowserRouter>
            <Card>
              <Card.Header>
                <Nav />
              </Card.Header>
              <Card.Body>
                <Routes>
                  <Route path="api/patient/list" element={<PatientList />} />
                  <Route path="api/patient/new" element={<CreatePatient />} />
                  <Route path="api/patient/update/id:" element={<UpdatePatient />} />
                  <Route path="api/patient/details/id:" element={<ViewPatient />} />
                </Routes>
              </Card.Body>
            </Card>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
