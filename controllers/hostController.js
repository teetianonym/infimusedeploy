const Host = require("./../models/host");
const factory = require("./factory");

exports.createHost = factory.createDoc(Host);
exports.getAllHost = factory.getAllDocs(Host);
exports.updateHost = factory.updateDoc(Host);
exports.getHost = factory.getOneDoc(Host);
exports.deleteHost = factory.deleteDoc(Host);
