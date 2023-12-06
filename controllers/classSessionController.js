const ClassSession = require("./../models/classsession");
const factory = require("./factory");

exports.createClassSession = factory.createDoc(ClassSession);
exports.getAllClassSession = factory.getAllDocs(ClassSession);
exports.getOneClassSession = factory.getOneDoc(ClassSession);
exports.updateClassSession = factory.updateDoc(ClassSession);
exports.deleteClassSession = factory.deleteDoc(ClassSession);
