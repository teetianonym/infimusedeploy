const factory = require("./factory");
const db = require("./../models");

const PackageClass = db.packageClasses;
const PackageTicket = db.packageTickets;
const Comment = db.comments;

exports.createPackageClass = factory.createDoc(PackageClass);
exports.getAllPackageClass = factory.getAllDocs(PackageClass);
exports.updatePackageClass = factory.updateDoc(PackageClass);
// exports.getPackageClass = factory.getOneDoc(PackageClass);
exports.deletePackageClass = factory.deleteDoc(PackageClass);

exports.getPackageClass = async (req, res) => {
  try {
    const packageClassId = req.params.id;
    const doc = await PackageClass.findByPk(packageClassId, {
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
