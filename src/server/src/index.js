//#### Imports ####
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");
const multer = require("multer");
const userController = require("./controllers/users.controller.js");
const doctorController = require("./controllers/doctors.controller.js");
const patientController = require("./controllers/patients.controller");
const appointmentController = require("./controllers/appointment.controller");
const authController = require("./controllers/auth.controller");
const prescriptionController = require("./controllers/prescriptions.controller");
const documentController = require("./controllers/documents.controller");
const helpers = require("./controllers/helpers.controller");
const { clearDB, createSampleData } = require("./config/db.operations");
// const diskUpload = multer({ dest: "./uploads" });
const S3Utility = require("./services/awsUpload");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//CORS
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Databse Syncing
db.dbConnection.sync({ force: true }).then(async () => {
  await clearDB();
  createSampleData();
});

app.use("/test", (req, resp) => {
  resp.send("Hi! Server is running.");
});

// User Routes
app.use("/user/create", userController.createUser);
app.use("/user/:id", userController.getUser);
app.use("/user/update/:id", userController.updateUser);
app.use("/user/delete/:id", userController.deleteUser);

// Doctor Routes
app.use("/doctor/create", doctorController.createDoctor);
app.use("/doctor/:id", doctorController.getDoctor);
app.use("/doctor/update/:id", doctorController.updateDoctor);
app.use("/doctor/delete/:id", doctorController.deleteDoctor);

// Patient Routes
app.use("/patient/create", patientController.createPatient);
app.use("/patient/:id", patientController.getPatient);
app.use("/patient/update/:id", patientController.updatePatient);
app.use("/patient/delete/:id", patientController.deletePatient);

// Appointment Routes
app.use("/appointment/create", appointmentController.createAppointment);
app.use("/appointment/q", appointmentController.getSlotBookings);
app.use("/appointment/filter", appointmentController.getAppointmentsByFilter);
app.use("/appointment/:id", appointmentController.getAppointment);
app.use("/appointment/update/:id", appointmentController.updateAppointment);
app.use("/appointment/delete/:id", appointmentController.deleteAppointment);

// Prescription Routes
app.use("/prescription/create", prescriptionController.createPrescription);
app.use("/prescriptions/q", prescriptionController.getAPrescriptionsByPatient);
app.use("/prescriptions/query", prescriptionController.getPrescriptionByQuery);
app.use(
  "/presctiption/appointment/:id",
  prescriptionController.getPrescriptionByAppointment
);
app.use("/prescription/delete/:id", prescriptionController.deletePrescription);

// Attachments
app.use(
  "/attach/:patientid",
  // diskUpload.array("profile", 12),
  S3Utility.profileImgUpload.array("profile", 12),
  documentController.createDocument
);
app.use("/getDocuments/:patientid", documentController.getAllDocuments);

// Helpers
app.use("/opdSelectionInfo", helpers.getOpdSelectionInfo);

// Authentication Routes
app.use("/auth/login", authController.authenticateUser);

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
});
