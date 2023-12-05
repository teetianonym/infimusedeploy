const Host = require("./../models/host");
const factory = require("./factory");

exports.createHost = factory.createDoc(Host);
