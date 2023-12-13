const factory = require("./factory");
const db = require("./../models");

const PackageSession = db.packageSessions;
const PackageTicket = db.packageTickets;
const Comment = db.comments;
const Location = db.locations;

exports.createPackageSession = factory.createDoc(PackageSession);
exports.getAllPackageSessions = factory.getAllDocs(PackageSession);
// exports.getOnePackageSession = factory.getOneDoc(PackageSession);
exports.updatePackageSession = factory.updateDoc(PackageSession);
exports.deletePackageSession = factory.deleteDoc(PackageSession);

exports.getOnePackageSession = async (req, res) => {
  try {
    const packageSessionId = req.params.id;
    const doc = await PackageSession.findByPk(packageSessionId, {
      include: [
        {
          model: PackageTicket,

          as: "packageTicket",
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
