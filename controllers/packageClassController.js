const factory = require("./factory");
const db = require("./../models");

const PackageClass = db.packageClasses;

exports.createPackageClass = factory.createDoc(PackageClass);
exports.getAllPackageClass = factory.getAllDocs(PackageClass);
exports.updatePackageClass = factory.updateDoc(PackageClass);
exports.getPackageClass = factory.getOneDoc(PackageClass);
exports.deletePackageClass = factory.deleteDoc(PackageClass);
