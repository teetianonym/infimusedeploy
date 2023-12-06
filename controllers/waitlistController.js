const factory = require("./factory");
const Waitlist = require("./../models/waitlist");

exports.createWaitlist = factory.createDoc(Waitlist);
exports.getWaitlist = factory.getOneDoc(Waitlist);
exports.getAllWaitlists = factory.getAllDocs(Waitlist);
exports.updateWaitlist = factory.updateDoc(Waitlist);
exports.deleteWaitlist = factory.deleteDoc(Waitlist);
