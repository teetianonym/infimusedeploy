const factory = require("./factory");
const Customer = require("./../models/customer");

exports.createCustomer = factory.createDoc(Customer);
exports.getCustomer = factory.getOneDoc(Customer);
exports.getAllCustomers = factory.getAllDocs(Customer);
exports.updateCustomer = factory.updateDoc(Customer);
exports.deleteCustomer = factory.deleteDoc(Customer);
