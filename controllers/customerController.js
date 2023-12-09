const factory = require("./factory");
const db = require("./../models");
const Customer = db.customers;
const workshopTicket = db.workshopTickets;
const ClassTicket = db.classTickets;
const PackageSession = db.packageSessions;

exports.createCustomer = factory.createDoc(Customer);
// exports.getCustomer = factory.getOneDoc(Customer);
exports.getAllCustomers = factory.getAllDocs(Customer);
exports.updateCustomer = factory.updateDoc(Customer);
exports.deleteCustomer = factory.deleteDoc(Customer);

exports.getCustomer = async (req, res) => {
  try {
    const doc = await Customer.findByPk(req.params.id, {
      include: [
        {
          model: PackageSession,

          as: "packageSession",
          attributes: ["startTime"],
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
