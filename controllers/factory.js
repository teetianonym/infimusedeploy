const { Model } = require("sequelize");

// createDoc
exports.createDoc = (Model) => async (req, res) => {
  try {
    const doc = await Model.create(req.body);
    console.log("req.body :" + req.body);
    res.status(200).json({ status: "Document created successful", doc });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res
        .status(400)
        .json({ status: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ status: "Internal Server Error", error });
    }
  }
};

// get All docs

exports.getAllDocs = (Model) => async (req, res) => {
  try {
    const docs = await Model.findAll();
    res
      .status(200)
      .json({ result: "Success", TotalDocs: docs.length, Document: docs });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

// update docs

exports.updateDoc = (Model, id) => async (req, res) => {
  try {
    const doc = await Model.findOne({ where: { id: req.params.id } });

    if (doc) {
      const updateDoc = await doc.update(req.body);
      res.status(200).json({ result: "updated", NewDocument: updateDoc });
    }
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

// get a single Doc
exports.getOneDoc = (Model, id) => async (req, res) => {
  try {
    const doc = await Model.findOne({ where: { id: req.params.id } });

    if (doc) {
      res.status(200).json({ result: "Success", Data: doc });
    }
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

// delete Doc
exports.deleteDoc = (Model) => async (req, res) => {
  try {
    const doc = await Model.findOne({ where: { id: req.params.id } });
    if (doc) {
      Model.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: "Data deleted successful" });
    }
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};
