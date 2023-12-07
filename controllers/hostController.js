const factory = require("./factory");
const db = require("./../models");
const Host = db.hosts;

exports.createHost = factory.createDoc(Host);
exports.getAllHost = factory.getAllDocs(Host);
exports.updateHost = factory.updateDoc(Host);
exports.getHost = factory.getOneDoc(Host);
exports.deleteHost = factory.deleteDoc(Host);
