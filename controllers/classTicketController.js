const factory = require("./factory");
const db = require("./../models");

const classTicket = db.classTickets;

exports.createClassTicket = factory.createDoc(classTicket);
exports.getClassTicket = factory.getOneDoc(classTicket);
exports.getAllClassTickets = factory.getAllDocs(classTicket);
exports.updateClassTicket = factory.updateDoc(classTicket);
exports.deleteClassTicket = factory.deleteDoc(classTicket);
