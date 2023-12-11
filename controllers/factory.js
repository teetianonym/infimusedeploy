// const { Model } = require("sequelize");

// createDoc
exports.createDoc = (Model) => async (req, res) => {
  try {
    const doc = await Model.create(req.body);
    console.log("req.body :" + req.body);
    res.status(200).json({ status: "Document created successful", doc });
  } catch (error) {
    console.log(error);
    if (error.name === "SequelizeValidationError") {
      res
        .status(400)
        .json({ status: "Validation error", errors: error.errors });
    } else {
      // res.status(500).json({ status: "Internal Server Error", error });
    }
  }
};

// get All docs

exports.getAllDocs = (Model) => async (req, res) => {
  try {
    // paginate
    const page = parseInt(req.query.page, 15) || 1;
    const limit = parseInt(req.query.limit, 15) || 15;
    const offset = (page - 1) * limit;
    // sorting
    const sortFields = ["name", "price"];
    const sortBy = req.query.sort;
    const order = sortFields.includes(sortBy) ? sortBy : "createdAt";

    const docs = await Model.findAll({
      limit: limit,
      offset: offset,
      order: [[order, "DESC"]],
    });
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
    console.log(error);
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
