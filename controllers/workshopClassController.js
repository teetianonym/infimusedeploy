const factory = require("./factory");
const db = require("./../models");

const WorkshopClass = db.workshopClasses;

exports.createWorkshopClass = factory.createDoc(WorkshopClass);
exports.getAllWorkshopClass = factory.getAllDocs(WorkshopClass);
exports.getOneWorkshopClass = factory.getOneDoc(WorkshopClass);
exports.updateWorkshopClass = factory.updateDoc(WorkshopClass);
exports.deleteWorkshopClass = factory.deleteDoc(WorkshopClass);
