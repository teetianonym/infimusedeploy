const factory = require("./factory");
const db = require("./../models");

const Workshop = db.workshops;
const Comment = db.comments;
const workshopTicket = db.workshopTickets;

exports.createWorkshop = factory.createDoc(Workshop);
exports.getAllWorkshop = factory.getAllDocs(Workshop);
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
