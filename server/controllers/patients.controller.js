const Patient = require("../models/patients.model");

const createPatient = (req, res) => {
    const {body} = req;
    console.log(body);
    Patient.create(req.body)
        .then((newPatient) => {
            res.json({ newPatient });
        })
        .catch((err) => {
            res.status(400).json({error: err });
        });
};
const getAllPatients = (req, res) => {
    Patient.find()
        .then((allPatients) => {
            res.json(allPatients);
        })
        .catch((err) => {
            res.status(400).json({error: err });
        });
};
const getOnePatient = (req, res) => {
    Patient.findOne({_id: req.params.id})
    .then((onePatient) => {
        res.json(onePatient);
    })
    .catch((err) => {
        res.status(400).json({error: err });
    });
};

const getOneByName = (req, res) => {
    Patient.findOne({firstName: req.params.firstName})
    .then((onePatientByName) => {
        res.json(onePatientByName);
        console.log(onePatientByName)
    })
    .catch((err) => {
        res.status(400).json({error: err });
    });
};

const updatePatient = (req, res) => {
    Patient.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true,})
        .then((updatedPatient) => {
            res.json({ updatedPatient });
        })
        .catch((err) => {
            res.status(400).json({error: err });
        });
};
const deletePatient = (req, res) => {
    Patient.deleteOne({_id: req.params.id})
        .then((deletedPatient) => {
            res.json({ deletedPatient });
        })
        .catch((err) => {
            res.status(400).json({error: err });
        });
};

module.exports = {createPatient, getAllPatients, getOnePatient, updatePatient, deletePatient, getOneByName};