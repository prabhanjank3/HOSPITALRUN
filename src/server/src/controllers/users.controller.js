const db = require('../models/index')
const User = db.users;
const Op = db.Sequalize.Op

exports.createUser = (req, resp) => {
    req.body['id'] = 'TA'+Math.floor(Math.random()*100000);
    User.create(req.body)
    .then(data => {
        resp.status(201).send(data);
    })
    .catch(err => {
        console.log(err)
        resp.status(500).send(err);
    });
}

exports.updateUser = (req, resp) => {
    User.update(req.body, {where:{id: req.params.id}})
    .then(()=> { 
        resp.status(200).send({
            message: "User updated Successfully"
        })
        }).catch(err=> {
            console.log(err)
            resp.status(500).send({
                message:
                    err.message || "Some error occurred while updating user."
                });
        })
}
exports.deleteUser = (req, resp) => {
    User.destroy({where:{id:req.params.id}})
    .then(result => {
        if(result === 1){
            resp.status(200).send({
                message: "User deleted Successfully"
            })
        }else{
            resp.status(500).send({
                message:
                    "Some error occurred while deleting user."
                });
        }
    })
    .catch(err=> {
        resp.status(500).send({
            message:
                err.message || "Some error occurred while deleting user."
            });
    })
}
exports.getUser = (req, resp) => {
    User.findOne({where:{id:req.params.id}})
    .then(data => {
        resp.status(201).send(data);
    })
    .catch(err => {
        resp.status(500).send({
        message:
            err.message || "Some error occurred while retrieving the user."
        });
    });
}

