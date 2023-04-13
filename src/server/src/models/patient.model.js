module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("patients", {
        id:{
            type: Sequelize.STRING,
            primaryKey: true
        },
        userid:{
            type:Sequelize.STRING,
            references:{
                model: "users",
                key: "id"
              }
        },
        createdAt: {
            allowNull: false,
            defaultValue: Sequelize.fn('now'),
            type: Sequelize.DATE
          },
        updatedAt: {
            allowNull: false,
            defaultValue: Sequelize.fn('now'),
            type: Sequelize.DATE
        }
    })
    return Patient;
}