const db = require('../models/index')
const User = db.users;
const Doctor = db.doctors;
const Patient = db.patients;
const Opd = db.opds;
const Op = db.Sequalize.Op

const getDbModelByRole = (role) => {
    if(role == 'DOCTOR')
    {
        return Doctor;
    }
    else if(role == 'PATIENT')
    {
        return Patient;
    }
}
const extraInclusions = (role) => {
    if(role == 'DOCTOR')
    {
        return [{model:Opd}]
    }
    else
    {
        return []
    }
} 
exports.authenticateUser = (req, resp) => {
    const {role, email, password} = req.body;
    
    User.findAll({ where:{email:email}, raw:true, include:[{model:getDbModelByRole(role), include:extraInclusions(role), required:true}] })
    .then(data => {
        data[0]['role'] = role;
        resp.status(201).send(data);
    })
    .catch(err => {
        console.log(err)
        resp.status(500).send(err);
    });
}

