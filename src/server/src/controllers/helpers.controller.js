const db = require('../models/index')
const User = db.users;
const Doctor = db.doctors;
const Patient = db.patients;
const Opd = db.opds;
const Op = db.Sequalize.Op;

exports.getOpdSelectionInfo = (req, resp) => {
    User.findAll({attributes:['id','firstname','lastname'],include:{
        model:Doctor,
        required:true,
        attributes:['id'],
        include:{
            model:Opd,
            require:true
        }
    }}).then((data) => {
        resp.status(201).send(data);
    })
    .catch(err => {
        console.log(err)
        resp.status(500).send(err);
    });
}