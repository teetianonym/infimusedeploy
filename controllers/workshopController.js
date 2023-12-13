const factory = require("./factory");
const db = require("./../models");

const Workshop = db.workshops;
const Comment = db.comments;
const workshopTicket = db.workshopTickets;
const Location = db.locations;

exports.createWorkshop = factory.createDoc(Workshop);
// exports.getAllWorkshop = factory.getAllDocs(Workshop);
exports.updateWorkshop = factory.updateDoc(Workshop);
exports.deleteWorkshop = factory.deleteDoc(Workshop);

exports.getWorkshop = async (req, res) => {
  try {
    const doc = await Workshop.findByPk(req.params.id, {
      include: [
        {
          model: workshopTicket,

          as: "workshopTicket",
          attributes: ["ticketId"],
        },
      ],
      include: [
        {
          model: Comment,
          as: "comment",
          attributes: ["comment"],
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

exports.getAllWorkshop = async (req, res) => {
  try {
    // paginate
    const page = parseInt(req.query.page, 15) || 1;
    const limit = parseInt(req.query.limit, 15) || 15;
    const offset = (page - 1) * limit;
    // sorting
    const sortFields = ["price"];
    const sortBy = req.query.sort;
    const order = sortFields.includes(sortBy) ? sortBy : "createdAt";

    // location Filter
    const { location } = req.query;
    let whereClause = {};
    if (location) {
      const locations = await Location.findAll({
        where: { location },
      });
      const workshopIds = locations.map((location) => location.workshopId);

      whereClause = { id: workshopIds };
    }

    const docs = await Workshop.findAll({
      limit: limit,
      offset: offset,
      order: [[order, "DESC"]],
      where: whereClause,
    });
    res
      .status(200)
      .json({ result: "Success", TotalDocs: docs.length, Document: docs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: error });
  }
};
