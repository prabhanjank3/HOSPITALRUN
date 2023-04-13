const db = require('../models/index')
const Doctor = db.doctors;
const Op = db.Sequalize.Op

exports.createDoctor = (req, resp) => {
    req.body['id'] = 'DO'+Math.floor(Math.random()*100000);
    Doctor.create(req.body)
    .then(data => {
        resp.status(201).send(data);
    })
    .catch(err => {
        console.log(err)
        resp.status(500).send(err);
    });
}

exports.updateDoctor = (req, resp) => {
    Doctor.update(req.body, {where:{id: req.params.id}})
    .then(()=> { 
        resp.status(200).send({
            message: "Doctor updated Successfully"
        })
        }).catch(err=> {
            console.log(err)
            resp.status(500).send({
                message:
                    err.message || "Some error occurred while updating Doctor."
                });
        })
}
exports.deleteDoctor = (req, resp) => {
    Doctor.destroy({where:{id:req.params.id}})
    .then(result => {
        if(result === 1){
            resp.status(200).send({
                message: "Doctor deleted Successfully"
            })
        }else{
            resp.status(500).send({
                message:
                    "Some error occurred while deleting Doctor."
                });
        }
    })
    .catch(err=> {
        resp.status(500).send({
            message:
                err.message || "Some error occurred while deleting Doctor."
            });
    })
}
exports.getDoctor = (req, resp) => {
    Doctor.findOne({where:{id:req.params.id}})
    .then(data => {
        resp.status(201).send(data);
    })
    .catch(err => {
        resp.status(500).send({
        message:
            err.message || "Some error occurred while retrieving the Doctor."
        });
    });
}

