exports.createDoc = (Model) => async (req, res) => {
  try {
    const doc = await Model.create(req.body);
    console.log("req.body :" + req.body);
    res.status(200).json({ status: "Document created successful", doc });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      // Handle validation errors
      res
        .status(400)
        .json({ status: "Validation error", errors: error.errors });
    } else {
      // Handle other errors
      res.status(500).json({ status: "Internal Server Error", error });
    }
  }
};
