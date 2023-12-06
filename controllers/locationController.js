const factory = require("./factory");
const Location = require("./../models/location");

exports.createLocation = factory.createDoc(Location);
exports.getLocation = factory.getOneDoc(Location);
exports.getAllLocations = factory.getAllDocs(Location);
exports.updateLocation = factory.updateDoc(Location);
exports.deleteLocation = factory.deleteDoc(Location);
