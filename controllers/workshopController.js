const factory = require("./factory");
const db = require("./../models");

const Workshop = db.workshops;

exports.createWorkshop = factory.createDoc(Workshop);
exports.getAllWorkshop = factory.getAllDocs(Workshop);
exports.updateWorkshop = factory.updateDoc(Workshop);
exports.getWorkshop = factory.getOneDoc(Workshop);
exports.deleteWorkshop = factory.deleteDoc(Workshop);
