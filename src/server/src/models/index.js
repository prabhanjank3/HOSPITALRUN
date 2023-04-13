const Sequalize = require("sequelize");
const dbConnection = require("../config/db.connection");

const db = {};
db.dbConnection = dbConnection;
db.Sequalize = Sequalize;

db.users = require("./user.model")(dbConnection, Sequalize);
db.patients = require("./patient.model")(dbConnection, Sequalize);
db.doctors = require("./doctor.model")(dbConnection, Sequalize);
db.appointment = require("./appointment.model")(dbConnection, Sequalize);
db.opds = require("./opd.model")(dbConnection, Sequalize);
db.prescription = require("./prescription.model")(dbConnection, Sequalize);
db.document = require("./document.model")(dbConnection, Sequalize);

db.users.hasOne(db.doctors, { foreignKey: "userid" });
db.doctors.belongsTo(db.users, { foreignKey: "userid" });

db.users.hasOne(db.patients, { foreignKey: "userid" });
db.patients.belongsTo(db.users, { foreignKey: "userid" });

db.doctors.hasOne(db.opds, { foreignKey: "doctorid" });
db.opds.belongsTo(db.doctors, { foreignKey: "doctorid" });

db.opds.hasMany(db.appointment, { foreignKey: "opdid" });
db.appointment.belongsTo(db.opds, { foreignKey: "opdid" });

db.appointment.hasMany(db.prescription, { foreignKey: "appointmentid" });
db.prescription.belongsTo(db.appointment, { foreignKey: "appointmentid" });

db.patients.hasMany(db.appointment, { foreignKey: "patientid" });
db.appointment.belongsTo(db.patients, { foreignKey: "patientid" });

module.exports = db;
