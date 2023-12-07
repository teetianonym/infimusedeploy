const factory = require("./factory");
const db = require("./../models");

const PackageSession = db.packageSessions;

exports.createPackageSession = factory.createDoc(PackageSession);
exports.getAllPackageSessions = factory.getAllDocs(PackageSession);
exports.getOnePackageSession = factory.getOneDoc(PackageSession);
exports.updatePackageSession = factory.updateDoc(PackageSession);
exports.deletePackageSession = factory.deleteDoc(PackageSession);
