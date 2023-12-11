const factory = require("./factory");
const db = require("./../models");

const hostReview = db.hostReviews;
exports.createhostReview = factory.createDoc(hostReview);
exports.gethostReview = factory.getOneDoc(hostReview);
exports.getAllhostReviews = factory.getAllDocs(hostReview);
exports.updatehostReview = factory.updateDoc(hostReview);
exports.deletehostReview = factory.deleteDoc(hostReview);
