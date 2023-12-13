const factory = require("./factory");
const db = require("./../models");
const HostPlan = db.hostPlans;

exports.createHostPlan = factory.createDoc(HostPlan);
exports.getAllHostPlan = factory.getAllDocs(HostPlan);
exports.getOneHostPlan = factory.getOneDoc(HostPlan);
exports.updateHostPlan = factory.updateDoc(HostPlan);
exports.deleteHostPlan = factory.deleteDoc(HostPlan);
