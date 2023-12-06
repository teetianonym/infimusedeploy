const factory = require("./factory");
const WorkshopTicket = require("./../models/workshopticket");

exports.createWorkshopTicket = factory.createDoc(WorkshopTicket);
exports.getWorkshopTicket = factory.getOneDoc(WorkshopTicket);
exports.getAllWorkshopTickets = factory.getAllDocs(WorkshopTicket);
exports.updateWorkshopTicket = factory.updateDoc(WorkshopTicket);
exports.deleteWorkshopTicket = factory.deleteDoc(WorkshopTicket);
