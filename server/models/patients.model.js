const mongoose = require("mongoose");
 
const PatientSchema = new mongoose.Schema (
    {
        firstName: {
            type: String,
            required: [true, "First Name is required!"],
            minLength: [2, "First Name must be at least 2 characters!"], // validator constraint and message
        },
        lastName: {
            type: String,
            required: [true, "Last Name is required!"],
            minLength: [2, "Last Name must be at least 2 characters!"], // validator constraint and message
        },
            DOB: {
            type: Date,
        },
            age: {
            type: Number,
        },
            appointmentType: {
            type: String,
        },
            discussionTopic: {
            type: String,
        },
            summary: {
            type: String,
        },
    },
    { 
        timestamps: true, 
    },
);
 
module.exports = mongoose.model("Patient", PatientSchema);
