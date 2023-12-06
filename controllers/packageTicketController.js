const factory = require("./factory");
const PackageTicket = require("./../models/packageticket");

exports.createPackageTicket = factory.createDoc(PackageTicket);
exports.getPackageTicket = factory.getOneDoc(PackageTicket);
exports.getAllPackageTickets = factory.getAllDocs(PackageTicket);
exports.updatePackageTicket = factory.updateDoc(PackageTicket);
exports.deletePackageTicket = factory.deleteDoc(PackageTicket);
