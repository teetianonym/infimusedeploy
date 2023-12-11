const db = require("./../models");
const factory = require("./factory");

const ClassSession = db.classSessions;
const ClassTicket = db.classTickets;

exports.createClassSession = factory.createDoc(ClassSession);
exports.getAllClassSession = factory.getAllDocs(ClassSession);
exports.updateClassSession = factory.updateDoc(ClassSession);
exports.deleteClassSession = factory.deleteDoc(ClassSession);

exports.getOneClassSession = async (req, res) => {
  const classSessionId = req.params.id;
  try {
    const doc = await ClassSession.findByPk(classSessionId, {
      include: [
        // {
        //   model: ClassTicket,
        //   as: "ClassTicket",
        //   //   attributes: ["ticketId"],
        // },
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
