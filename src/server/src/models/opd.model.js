module.exports = (sequelize, Sequelize) => {
    const Opd = sequelize.define("opds", {
        id:{
            type: Sequelize.STRING,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING,
            required:true
        },
        doctorid:{
            type:Sequelize.STRING,
            references:{
                model: "doctors",
                key: "id"
              }
        },
        timing:{ 
            type: Sequelize.STRING, 
            get: function() {
                return JSON.parse(this.getDataValue('timing'));
            }, 
            set: function(val) {
                return this.setDataValue('timing', JSON.stringify(val));
            }
        },
        consultationtime:{
            type:Sequelize.INTEGER,
            defaultValue: 15
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
    return Opd;
}