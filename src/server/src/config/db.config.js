require('dotenv').config()

module.exports = {
    dev:{
        HOST: "localhost",
        USER: "postgres",
        PASSWORD: "admin",
        DB: "HMS",
        dialect: "postgres",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
  },
  test:{
    HOST: "mahmud.db.elephantsql.com",
    USER: "dwymknsr",
    PASSWORD: "cMcdg0VThIUeTDzMYIsdq1ZRc906y3qq",
    DB: "dwymknsr",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
},
  
  // prod:{
  //   HOST: process.env.DB_HOST,
  //   USER: process.env.DB_USER,
  //   PASSWORD: process.env.DB_PASSWORD,
  //   DB: process.env.DB_NAME,
  //   port:process.env.DB_PORT,
  //   dialect: "postgres",
  //   dialectOptions: {
  //   ssl: {      
  //     require:true,
  //     rejectUnauthorized: false 
  //   }
  //   },
  //   pool: {
  //     max: 50,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000
  //   }
  // }
}
