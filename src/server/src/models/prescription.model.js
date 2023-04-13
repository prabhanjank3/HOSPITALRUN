module.exports = (sequelize, Sequelize) => {
  const Prescription = sequelize.define("prescription", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    appointmentid: {
      type: Sequelize.STRING,
      references: {
        model: "appointments",
        key: "id"
      }
    },
    diagnosis: {
      type: Sequelize.TEXT
    },
    comments: {
      type: Sequelize.TEXT
    },
    medicines: {
      type: Sequelize.JSONB
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
  return Prescription;
};
