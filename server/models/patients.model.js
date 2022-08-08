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
        gender: {
            type: String,
            required: [true, "Gender is required!"],
        },
        DOB: {
            type: Date,
            required: [true, "DOB is required!"],
        },
        age: {
            type: Number,
            required: [true, "Age is required!"],
            minLength: [1, "Age must be at least 1 number!"], // validator constraint and message
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
