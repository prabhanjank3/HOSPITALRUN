const db = require("../models");
const Documents = db.document;

exports.createDocument = (req, resp, { error }) => {
  // profileImgUpload.profileImgUpload(req, resp, (error) => {
  if (error) {
    console.log("errors", error);
    resp.json({ error: error });
  } else {
    // If File not found
    if (req.files === undefined) {
      console.log("Error: No File Selected!");
      resp.json("Error: No File Selected");
    } else {
      // If Success

      // Save the file name into database into profile model
      const data = req.files.map((file) => {
        return {
          id: "DOC" + Math.floor(Math.random() * 100000),
          patientid: req.params.patientid,
          name: file.originalname,
          url: file.location
        };
      });
      Documents.bulkCreate(data)
        .then((res) => {
          resp.send(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  // });
};
exports.getAllDocuments = (req, resp) => {
  Documents.findAll({ patientid: req.params.patientid })
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
