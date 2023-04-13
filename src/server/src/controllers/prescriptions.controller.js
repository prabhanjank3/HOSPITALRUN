const db = require("../models/index");
const Patient = db.patients;
const Appointment = db.appointment;
const Prescription = db.prescription;
const Opd = db.opds;
const Doctor = db.doctors;
const User = db.users;

exports.createPrescription = (req, resp) => {
  Appointment.update(
    { completed: true },
    {
      where: {
        id: req.body.appointmentid
      }
    }
  ).then((data) => {
    console.log(data);
  });
  req.body["id"] = "PRS" + Math.floor(Math.random() * 100000);
  Prescription.create(req.body)
    .then((data) => {
      resp.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      resp.status(500).send(err);
    });
};

exports.getPrescriptionByAppointment = (req, resp) => {
  console.log(req.params);
  const appointmentid = req.params.id;
  Prescription.findAll({
    where: { appointmentid: appointmentid },
    raw: true
  })
    .then((data) => {
      resp.status(201).send(data);
    })
    .catch((err) => {
      resp.status(500).send({
        message:
          err.message || "Some error occurred while retrieving presctiption"
      });
    });
};
exports.getPrescriptionByQuery = (req, resp) => {
  Prescription.findAll({
    where: req.params.query,
    raw: true
  })
    .then((data) => {
      resp.status(201).send(data);
    })
    .catch((err) => {
      resp.status(500).send({
        message:
          err.message || "Some error occurred while retrieving presctiption"
      });
    });
};
exports.getAPrescriptionsByPatient = (req, resp) => {
  const { patientid } = req.query;
  Prescription.findAll({
    include: [
      {
        model: Appointment,
        attributes: ["id", "date", "reason", "time"],
        where: { patientid: patientid },
        include: [
          {
            model: Patient,
            attributes: ["id"]
          },
          {
            model: Opd,
            attributes: ["name"],
            include: [
              {
                model: Doctor,
                attributes: ["id"],
                include: [
                  { model: User, attributes: ["firstname", "lastname"] }
                ]
              }
            ]
          }
        ]
      }
    ],
    raw: true
  })
    .then((data) => {
      resp.status(201).send(data);
    })
    .catch((err) => {
      resp.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Appointment."
      });
    });
};

exports.deletePrescription = (req, resp) => {
  Prescription.destroy({ where: { id: req.params.id } })
    .then((result) => {
      if (result === 1) {
        resp.status(200).send({
          message: "Prescription deleted Successfully"
        });
      } else {
        resp.status(500).send({
          message: "Some error occurred while deleting Prescription."
        });
      }
    })
    .catch((err) => {
      resp.status(500).send({
        message:
          err.message || "Some error occurred while deleting Prescription."
      });
    });
};
