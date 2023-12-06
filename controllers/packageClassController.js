const PackageClass = require("./../models/packageclass");
const factory = require("./factory");

exports.createPackageClass = factory.createDoc(PackageClass);
exports.getAllPackageClass = factory.getAllDocs(PackageClass);
exports.updatePackageClass = factory.updateDoc(PackageClass);
exports.getPackageClass = factory.getOneDoc(PackageClass);
exports.deletePackageClass = factory.deleteDoc(PackageClass);
