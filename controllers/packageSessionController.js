const factory = require("./factory");
const PackageSession = require("./../models/packagesession");

exports.createPackageSession = factory.createDoc(PackageSession);
exports.getAllPackageSessions = factory.getAllDocs(PackageSession);
exports.getOnePackageSession = factory.getOneDoc(PackageSession);
exports.updatePackageSession = factory.updateDoc(PackageSession);
exports.deletePackageSession = factory.deleteDoc(PackageSession);
