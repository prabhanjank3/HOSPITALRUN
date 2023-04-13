const db = require("../models");
const {
  userData,
  doctorData,
  appointmentData,
  opdData,
  patientData,
  prescriptionData,
  documents
} = require("./sampleData");
exports.clearDB = () => {
  const destroyParameters = {
    where: {},
    truncate: true,
    cascade: true
  };
  db.users.destroy(destroyParameters);
  db.doctors.destroy(destroyParameters);
  db.opds.destroy(destroyParameters);
  db.patients.destroy(destroyParameters);
  db.appointment.destroy(destroyParameters);
  db.document.destroy(destroyParameters);
};

exports.createSampleData = async () => {
  await db.users.bulkCreate(userData);
  await db.doctors.bulkCreate(doctorData);
  await db.opds.bulkCreate(opdData);
  await db.patients.bulkCreate(patientData);
  await db.appointment.bulkCreate(appointmentData);
  await db.prescription.bulkCreate(prescriptionData);
  await db.document.bulkCreate(documents);
};
