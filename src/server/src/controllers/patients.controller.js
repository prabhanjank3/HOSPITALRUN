const db = require('../models/index')
const Patient = db.patients;
const Op = db.Sequalize.Op

exports.createPatient = (req, resp) => {
    req.body['id'] = 'PT'+Math.floor(Math.random()*100000);
    Patient.create(req.body)
    .then(data => {
        resp.status(201).send(data);
    })
    .catch(err => {
        console.log(err)
        resp.status(500).send(err);
    });
}

exports.updatePatient = (req, resp) => {
    Patient.update(req.body, {where:{id: req.params.id}})
    .then(()=> { 
        resp.status(200).send({
            message: "Patient updated Successfully"
        })
        }).catch(err=> {
            console.log(err)
            resp.status(500).send({
                message:
                    err.message || "Some error occurred while updating Patient."
                });
        })
}
exports.deletePatient = (req, resp) => {
    Patient.destroy({where:{id:req.params.id}})
    .then(result => {
        if(result === 1){
            resp.status(200).send({
                message: "Patient deleted Successfully"
            })
        }else{
            resp.status(500).send({
                message:
                    "Some error occurred while deleting Patient."
                });
        }
    })
    .catch(err=> {
        resp.status(500).send({
            message:
                err.message || "Some error occurred while deleting Patient."
            });
    })
}
exports.getPatient = (req, resp) => {
    Patient.findOne({where:{id:req.params.id}})
    .then(data => {
        resp.status(201).send(data);
    })
    .catch(err => {
        resp.status(500).send({
        message:
            err.message || "Some error occurred while retrieving the Patient."
        });
    });
}

