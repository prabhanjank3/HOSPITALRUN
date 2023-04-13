const db = require("../models/index");
const User = db.users;
const Patient = db.patients;
const Appointment = db.appointment;
const Doctor = db.doctors;
const Opd = db.opds;
const { Op } = require("sequelize");

exports.createAppointment = (req, resp) => {
  req.body["id"] = "AP" + Math.floor(Math.random() * 100000);
  Appointment.create(req.body)
    .then((data) => {
      resp.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      resp.status(500).send(err);
    });
};
exports.getSlotBookings = (req, resp) => {
  const { opdId, date } = req.query;
  Appointment.findAll({
    where: { opdid: opdId, date: date },
    attributes: ["slot"],
    raw: true
  })
    .then((data) => {
      const bookings = data.map((x) => x.slot);
      resp.status(201).send(bookings);
    })
    .catch((err) => {
      resp.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Appointment."
      });
    });
};
exports.getAllAppointments = (req, resp) => {
  const { opdId, date } = req.query;
  Appointment.findAll({
    where: { opdid: opdId, date: date },
    include: [
      { model: Patient, attributes: ["id"], include: [{ model: User }] }
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
exports.getAppointmentsByFilter = (req, resp) => {
  Appointment.findAll({
    where: {
      ...req.query,
      completed: false,
      date: {
        [Op.gte]: new Date()
      }
    },
    include: [
      {
        model: Patient,
        attributes: ["id"],
        include: [
          {
            model: User,
            attributes: ["id", "firstname", "lastname", "email", "phone", "dob"]
          }
        ]
      },
      {
        model: Opd,
        attributes: ["id"],
        include: [
          {
            model: Doctor,
            attributes: ["id"],
            include: [
              {
                model: User,
                attributes: ["id", "firstname", "lastname", "email", "phone"]
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
exports.updateAppointment = (req, resp) => {
  Appointment.update(req.body, { where: { id: req.params.id } })
    .then(() => {
      resp.status(200).send({
        message: "Appointment updated Successfully"
      });
    })
    .catch((err) => {
      console.log(err);
      resp.status(500).send({
        message:
          err.message || "Some error occurred while updating Appointment."
      });
    });
};
exports.deleteAppointment = (req, resp) => {
  Appointment.destroy({ where: { id: req.params.id } })
    .then((result) => {
      if (result === 1) {
        resp.status(200).send({
          message: "Appointment deleted Successfully"
        });
      } else {
        resp.status(500).send({
          message: "Some error occurred while deleting Appointment."
        });
      }
    })
    .catch((err) => {
      resp.status(500).send({
        message:
          err.message || "Some error occurred while deleting Appointment."
      });
    });
};
exports.getAppointment = (req, resp) => {
  Appointment.findOne({ where: { id: req.params.id } })
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
