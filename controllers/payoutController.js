const factory = require("./factory");
const db = require("./../models");

const Payout = db.payouts;

exports.createPayout = factory.createDoc(Payout);
exports.getPayout = factory.getOneDoc(Payout);
exports.getAllPayouts = factory.getAllDocs(Payout);
exports.updatePayout = factory.updateDoc(Payout);
exports.deletePayout = factory.deleteDoc(Payout);
