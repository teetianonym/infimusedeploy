const Workshop = require("./../models/workshop");
const factory = require("./factory");

exports.createWorkshop = factory.createDoc(Workshop);
exports.getAllWorkshop = factory.getAllDocs(Workshop);
exports.updateWorkshop = factory.updateDoc(Workshop);
exports.getWorkshop = factory.getOneDoc(Workshop);
exports.deleteWorkshop = factory.deleteDoc(Workshop);
