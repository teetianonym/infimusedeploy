const factory = require("./factory");
const db = require("./../models");

const Workshop = db.workshops;
const workshopTicket = db.workshopTickets;
const Customer = db.customers;
const Guest = db.guests;

exports.createWorkshop = factory.createDoc(Workshop);
exports.getAllWorkshop = factory.getAllDocs(Workshop);
exports.updateWorkshop = factory.updateDoc(Workshop);
exports.deleteWorkshop = factory.deleteDoc(Workshop);

exports.getWorkshop = async (req, res) => {
  try {
    const doc = await Workshop.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: workshopTicket,

          as: "workshopTicket",
          attributes: [
            "ticketId",
            "GuestId",
            "paymentTransactionId",
            "customerId",
          ],
          include: [
            {
              model: Customer,
              as: "customer",
              attributes: ["firstName", "lastName", "email"],
            },
          ],
          include: [
            {
              model: Guest,
              as: "guest",
              attributes: ["firstName", "lastName", "email"],
            },
          ],
        },
      ],
    });

    if (doc) {
      const ticketCount = doc.workshopTicket.length;
      res
        .status(200)
        .json({ result: "Success", workshopTickets: ticketCount, Data: doc });
    }
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};
