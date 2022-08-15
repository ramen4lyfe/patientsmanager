const patientsController = require("../controllers/patients.controller");

module.exports = (app) => {
    app.get("/api/patient", patientsController.getAllPatients);
    app.get("/api/patient/details/:id", patientsController.getOnePatient);
    app.post("/api/patient", patientsController.createPatient);
    app.put("/api/patient/update/:id", patientsController.updatePatient);
    app.delete("/api/patient/:id", patientsController.deletePatient);
    app.get("/api/patient/:firstName", patientsController.getOneByName);
    app.get("/api/patient/shortlist/:id", patientsController.addToList);

    
};