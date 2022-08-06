const patientsController = require("../controllers/patients.controller");

module.exports = (app) => {
    app.get("/api/patient", patientsController.getAllPatients);
    app.get("/api/patient/:id", patientsController.getOnePatient);
    app.post("/api/patient", patientsController.createPatient);
    app.put("/api/patient/:id", patientsController.updatePatient);
    app.delete("/api/patient/:id", patientsController.deletePatient);
    
};