const factory = require("./factory");
const ReviewComment = require("./../models/reviewcomment");

exports.createReviewComment = factory.createDoc(ReviewComment);
exports.getReviewComment = factory.getOneDoc(ReviewComment);
exports.getAllReviewComments = factory.getAllDocs(ReviewComment);
exports.updateReviewComment = factory.updateDoc(ReviewComment);
exports.deleteReviewComment = factory.deleteDoc(ReviewComment);
