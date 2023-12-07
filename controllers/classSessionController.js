const db = require("./../models");
const factory = require("./factory");

const ClassSession = db.classSessions;

exports.createClassSession = factory.createDoc(ClassSession);
exports.getAllClassSession = factory.getAllDocs(ClassSession);
exports.getOneClassSession = factory.getOneDoc(ClassSession);
exports.updateClassSession = factory.updateDoc(ClassSession);
exports.deleteClassSession = factory.deleteDoc(ClassSession);
