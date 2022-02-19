const express = require("express");
const connect = require("./configs/db");

const app = express();
app.use(express.json());

const patientController = require('./controller/patient.controller');
const doctorController = require('./controller/doctor.controller');

app.use("/patient", patientController);
app.use("/doctor", doctorController);

module.exports = app;