const factory = require("./factory");
const db = require("./../models");

const PaymentTransaction = db.paymentTransactions;

exports.createPaymentTransaction = factory.createDoc(PaymentTransaction);
exports.getPaymentTransaction = factory.getOneDoc(PaymentTransaction);
exports.getAllPaymentTransactions = factory.getAllDocs(PaymentTransaction);
exports.updatePaymentTransaction = factory.updateDoc(PaymentTransaction);
exports.deletePaymentTransaction = factory.deleteDoc(PaymentTransaction);
