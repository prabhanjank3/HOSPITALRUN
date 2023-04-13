module.exports = (sequelize, Sequelize) => {
  const Appointment = sequelize.define("appointments", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    patientid: {
      type: Sequelize.STRING,
      references: {
        model: "patients",
        key: "id"
      }
    },
    opdid: {
      type: Sequelize.STRING,
      references: {
        model: "opds",
        key: "id"
      }
    },
    date: {
      type: Sequelize.DATEONLY
    },
    slot: {
      type: Sequelize.INTEGER
    },
    time: {
      type: Sequelize.STRING
    },
    reason: {
      type: Sequelize.TEXT
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      defaultValue: Sequelize.fn("now"),
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      defaultValue: Sequelize.fn("now"),
      type: Sequelize.DATE
    }
  });
  return Appointment;
};
