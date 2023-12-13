const factory = require("./factory");
const db = require("./../models");

const PackageClass = db.packageClasses;
const PackageTicket = db.packageTickets;
const Comment = db.comments;
const Location = db.locations;

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

exports.getAllPackageClass = async (req, res) => {
  try {
    // paginate
    const page = parseInt(req.query.page, 15) || 1;
    const limit = parseInt(req.query.limit, 15) || 15;
    const offset = (page - 1) * limit;
    // sorting
    const sortFields = ["location", "price"];
    const sortBy = req.query.sort;
    const order = sortFields.includes(sortBy) ? sortBy : "createdAt";

    // location Filter
    const { location } = req.query;
    let whereClause = {};
    if (location) {
      const locations = await Location.findAll({
        where: { location },
      });
      const packageIds = locations.map((location) => location.packageClassId);

      whereClause = { id: packageIds };
    }

    const docs = await PackageClass.findAll({
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
