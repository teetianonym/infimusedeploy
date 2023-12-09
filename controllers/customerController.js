const factory = require("./factory");
const db = require("./../models");
const Customer = db.customers;
const workshopTicket = db.workshopTickets;
const ClassTicket = db.classTickets;
const PackageSession = db.packageSessions;

exports.createCustomer = factory.createDoc(Customer);
exports.getAllCustomers = factory.getAllDocs(Customer);
exports.updateCustomer = factory.updateDoc(Customer);
exports.deleteCustomer = factory.deleteDoc(Customer);

exports.getCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    const doc = await Customer.findByPk(customerId, {
      include: [
        {
          model: PackageSession,
          where: { customerId: customerId }, // Use the correct equality operator and field
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
