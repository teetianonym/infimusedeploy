const factory = require("./factory");
const Guest = require("./../models/guest");

exports.createGuest = factory.createDoc(Guest);
exports.getGuest = factory.getOneDoc(Guest);
exports.getAllGuests = factory.getAllDocs(Guest);
exports.updateGuest = factory.updateDoc(Guest);
exports.deleteGuest = factory.deleteDoc(Guest);
