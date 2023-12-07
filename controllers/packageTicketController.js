const factory = require("./factory");
const db = require("./../models");

const PackageTicket = db.packageTickets;

exports.createPackageTicket = factory.createDoc(PackageTicket);
exports.getPackageTicket = factory.getOneDoc(PackageTicket);
exports.getAllPackageTickets = factory.getAllDocs(PackageTicket);
exports.updatePackageTicket = factory.updateDoc(PackageTicket);
exports.deletePackageTicket = factory.deleteDoc(PackageTicket);
