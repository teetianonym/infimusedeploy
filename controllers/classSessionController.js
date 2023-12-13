const db = require("./../models");
const factory = require("./factory");

const ClassSession = db.classSessions;
const ClassTicket = db.classTickets;
const Location = db.locations;

exports.createClassSession = factory.createDoc(ClassSession);
// exports.getAllClassSession = factory.getAllDocs(ClassSession);
exports.updateClassSession = factory.updateDoc(ClassSession);
exports.deleteClassSession = factory.deleteDoc(ClassSession);

exports.getAllClassSession = async (req, res) => {
  try {
    // paginate
    const page = parseInt(req.query.page, 15) || 1;
    const limit = parseInt(req.query.limit, 15) || 15;
    const offset = (page - 1) * limit;
    // sorting
    const sortFields = ["location", "price"];
    const sortBy = req.query.sort;
    const order = sortFields.includes(sortBy) ? sortBy : "createdAt";

    const docs = await ClassSession.findAll({
      limit: limit,
      offset: offset,
      order: [[order, "DESC"]],
    });
    res
      .status(200)
      .json({ result: "Success", TotalDocs: docs.length, Document: docs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: error });
  }
};

exports.getOneClassSession = async (req, res) => {
  const classSessionId = req.params.id;
  try {
    const doc = await ClassSession.findByPk(classSessionId, {
      include: [
        {
          model: Location,
          as: "location",
          attributes: ["location", "latitude", "longitude"],
        },
      ],
    });

    if (doc) {
      res.status(200).json({ result: "Success", Data: doc });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: error });
  }
};
