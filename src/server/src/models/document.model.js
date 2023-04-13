module.exports = (sequelize, Sequelize) => {
  const Document = sequelize.define("documents", {
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
    name: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    url: {
      type: Sequelize.STRING,
      required: true
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
  return Document;
};
