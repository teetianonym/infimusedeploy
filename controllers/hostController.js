const factory = require("./factory");
const db = require("./../models");
const hostReview = db.hostReviews;
const Host = db.hosts;

exports.createHost = factory.createDoc(Host);
exports.getAllHost = factory.getAllDocs(Host);
exports.updateHost = factory.updateDoc(Host);
exports.deleteHost = factory.deleteDoc(Host);

exports.getHost = async (req, res) => {
  const hostId = req.params.id;
  try {
    const doc = await Host.findByPk(hostId, {
      include: [
        {
          model: hostReview,
          attributes: ["content", "rating"],
          as: "hostReview",
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
