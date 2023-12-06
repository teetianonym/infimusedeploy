const factory = require("./factory");
const classTicket = require("./../models/classticket");

exports.createClassTicket = factory.createDoc(classTicket);
exports.getClassTicket = factory.getOneDoc(classTicket);
exports.getAllClassTickets = factory.getAllDocs(classTicket);
exports.updateClassTicket = factory.updateDoc(classTicket);
exports.deleteClassTicket = factory.deleteDoc(classTicket);
