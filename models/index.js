const dotenv = require("dotenv");
const { Sequelize, DataTypes } = require("sequelize");

dotenv.config();

const db_name = process.env.DATABASE_NAME;
const db_username = process.env.DATABASE_USERNAME;
const db_password = process.env.DATABASE_PASSWORD;
const db_host = process.env.DATABASE_HOST;
const db_dialect = process.env.DATABASE_DIALECT;

const sequelize = new Sequelize(db_name, db_username, db_password, {
  host: db_host,
  dialect: db_dialect,
});

sequelize
  .authenticate()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.classSessions = require("./classsession")(sequelize, DataTypes);
db.classTickets = require("./classticket")(sequelize, DataTypes);
db.customers = require("./customer")(sequelize, DataTypes);
db.guests = require("./guest")(sequelize, DataTypes);
db.hosts = require("./host")(sequelize, DataTypes);
db.locations = require("./location")(sequelize, DataTypes);
db.notifications = require("./Notification")(sequelize, DataTypes);
db.packageClasses = require("./packageclass")(sequelize, DataTypes);
db.packageSessions = require("./packagesession")(sequelize, DataTypes);
db.packageTickets = require("./packageticket")(sequelize, DataTypes);
db.paymentTransactions = require("./paymenttransaction")(sequelize, DataTypes);
db.payouts = require("./payout")(sequelize, DataTypes);
db.reviewComments = require("./reviewcomment")(sequelize, DataTypes);
db.waitlists = require("./waitlist")(sequelize, DataTypes);
db.workshops = require("./workshop")(sequelize, DataTypes);
db.workshopClasses = require("./workshopclass")(sequelize, DataTypes);
db.workshopTickets = require("./workshopticket")(sequelize, DataTypes);
db.documents = require("./document")(sequelize, DataTypes);
db.categories = require("./category")(sequelize, DataTypes);
db.subCategories = require("./subCategory")(sequelize, DataTypes);
db.carts = require("./cart")(sequelize, DataTypes);
db.hostReviews = require("./hostReview")(sequelize, DataTypes);
db.hostTotalReviews = require("./hostTotalReview")(sequelize, DataTypes);
db.wishlists = require("./wishlist")(sequelize, DataTypes);
db.refundTickets = require("./refundTicket")(sequelize, DataTypes);
db.hostPlans = require("./hostPlan")(sequelize, DataTypes);
db.hostPaymentPlanTransaction = require("./hostPaymentPlanTransaction")(
  sequelize,
  DataTypes
);

db.sequelize
  .sync({ force: false })
  .then(() => console.log(`Database synced`))
  .catch((err) => console.log(err));

db.workshops.hasMany(db.workshopClasses, {
  foreignKey: "workshopId",
  as: "workshopClass",
});
db.workshopClasses.belongsTo(db.workshops, {
  foreignKey: "workshopId",
  as: "workshop",
});
db.hosts.hasMany(db.classSessions, {
  foreignKey: "hostId",
  as: "classSession",
});
db.classSessions.belongsTo(db.hosts, { foreignKey: "hostId", as: "host" });

db.hosts.hasMany(db.workshops, {
  foreignKey: "hostId",
  as: "workshop",
});
db.workshops.belongsTo(db.hosts, { foreignKey: "hostId", as: "host" });

db.hosts.hasMany(db.packageClasses, {
  foreignKey: "hostId",
  as: "packageClass",
});
db.packageClasses.belongsTo(db.hosts, { foreignKey: "hostId", as: "host" });

db.packageClasses.hasMany(db.packageSessions, {
  foreignKey: "packageClassId",
  as: "packageSession",
});
db.packageSessions.belongsTo(db.packageClasses, {
  foreignKey: "packageClassId",
  as: "packageClass",
});

db.classSessions.hasMany(db.locations, {
  foreignKey: "classSessionId",
  as: "location",
});
db.locations.belongsTo(db.classSessions, {
  foreignKey: "classSessionId",
  as: "classSession",
});

db.workshops.hasMany(db.locations, {
  foreignKey: "workshopId",
  as: "location",
});
db.locations.belongsTo(db.workshops, {
  as: "workshop",
  foreignKey: "workshopId",
});

db.packageClasses.hasMany(db.locations, {
  foreignKey: "packageClassId",
  as: "location",
});
db.locations.belongsTo(db.packageClasses, {
  as: "packageClass",
  foreignKey: "packageClassId",
});

db.classSessions.hasMany(db.classTickets, {
  as: "classTicket",
  foreignKey: "classSessionId",
});
db.classTickets.belongsTo(db.classSessions, {
  as: "classSession",
  foreignKey: "classSessionId",
});

db.workshops.hasMany(db.workshopTickets, {
  as: "workshopTicket",
  foreignKey: "workshopId",
});
db.workshopTickets.belongsTo(db.workshops, {
  as: "workshop",
  foreignKey: "workshopId",
});

db.packageClasses.hasMany(db.packageTickets, {
  as: "packageTicket",
  foreignKey: "packageClassId",
});
db.packageTickets.belongsTo(db.packageClasses, {
  as: "packageClass",
  foreignKey: "packageClassId",
});

db.hosts.hasMany(db.payouts, { as: "payout", foreignKey: "hostId" });
db.payouts.belongsTo(db.hosts, { as: "host", foreignKey: "hostId" });

db.customers.hasMany(db.classTickets, {
  as: "classTicket",
  foreignKey: "customerId",
});
db.classTickets.belongsTo(db.customers, {
  as: "customer",
  foreignKey: "customerId",
});

db.customers.hasMany(db.workshopTickets, {
  as: "workshopTicket",
  foreignKey: "customerId",
});
db.workshopTickets.belongsTo(db.customers, {
  as: "customer",
  foreignKey: "customerId",
});

db.customers.hasMany(db.packageTickets, {
  as: "packageTicket",
  foreignKey: "customerId",
});
db.packageTickets.belongsTo(db.customers, {
  as: "customer",
  foreignKey: "customerId",
});

db.guests.hasMany(db.packageTickets, {
  as: "packageTicket",
  foreignKey: "guestId",
});
db.packageTickets.belongsTo(db.guests, {
  as: "guest",
  foreignKey: "guestId",
});

db.guests.hasMany(db.workshopTickets, {
  as: "workshopTicket",
  foreignKey: "guestId",
});
db.workshopTickets.belongsTo(db.guests, {
  as: "guest",
  foreignKey: "guestId",
});

db.guests.hasMany(db.classTickets, {
  as: "classTicket",
  foreignKey: "guestId",
});
db.classTickets.belongsTo(db.guests, {
  as: "guest",
  foreignKey: "guestId",
});

db.hosts.hasMany(db.notifications, {
  as: "notification",
  foreignKey: "hostId",
});
db.notifications.belongsTo(db.hosts, { as: "host", foreignKey: "hostId" });

db.customers.hasMany(db.notifications, {
  as: "notification",
  foreignKey: "customerId",
});
db.notifications.belongsTo(db.customers, {
  as: "customer",
  foreignKey: "customerId",
});

db.hosts.hasMany(db.reviewComments, {
  as: "reviewComment",
  foreignKey: "hostId",
});
db.reviewComments.belongsTo(db.hosts, { as: "host", foreignKey: "hostId" });

db.customers.hasMany(db.paymentTransactions, {
  as: "paymentTransaction",
  foreignKey: "customerId",
});
db.paymentTransactions.belongsTo(db.customers, {
  as: "customer",
  foreignKey: "customerId",
});

db.guests.hasMany(db.paymentTransactions, {
  as: "paymentTransaction",
  foreignKey: "guestId",
});
db.paymentTransactions.belongsTo(db.guests, {
  as: "guest",
  foreignKey: "guestId",
});

db.paymentTransactions.hasMany(db.classTickets, {
  as: "classTicket",
  foreignKey: "paymentTransactionId",
});
db.classTickets.belongsTo(db.paymentTransactions, {
  as: "paymentTransaction",
  foreignKey: "paymentTransactionId",
});

db.paymentTransactions.hasMany(db.workshopTickets, {
  as: "workshopTicket",
  foreignKey: "paymentTransactionId",
});
db.workshopTickets.belongsTo(db.paymentTransactions, {
  as: "paymentTransaction",
  foreignKey: "paymentTransactionId",
});

db.paymentTransactions.hasOne(db.packageTickets, {
  as: "packageTicket",
  foreignKey: "paymentTransactionId",
});
db.packageTickets.belongsTo(db.paymentTransactions, {
  as: "paymentTransaction",
  foreignKey: "paymentTransactionId",
});

db.classSessions.hasMany(db.waitlists, {
  as: "waitlist",
  foreignKey: "classSessionId",
});
db.waitlists.belongsTo(db.classSessions, {
  as: "classSession",
  foreignKey: "classSessionId",
});

db.workshops.hasMany(db.waitlists, {
  as: "waitlist",
  foreignKey: "workshopId",
});
db.waitlists.belongsTo(db.workshops, {
  as: "workshop",
  foreignKey: "workshopId",
});

db.packageClasses.hasMany(db.waitlists, {
  as: "waitlist",
  foreignKey: "packageClassId",
});
db.waitlists.belongsTo(db.packageClasses, {
  as: "packageClass",
  foreignKey: "packageClassId",
});

db.hosts.hasMany(db.documents, { as: "document", foreignKey: "hostId" });
db.documents.belongsTo(db.hosts, { as: "host", foreignKey: "hostId" });

db.categories.hasMany(db.subCategories, {
  as: "subCategory",
  foreignKey: "categoryId",
});
db.subCategories.belongsTo(db.categories, {
  as: "category",
  foreignKey: "categoryId",
});

db.classSessions.hasMany(db.subCategories, {
  as: "subCategory",
  foreignKey: "classSessionId",
});
db.subCategories.belongsTo(db.classSessions, {
  as: "classSession-subCategory",
  foreignKey: "classSessionId",
});

db.classSessions.hasMany(db.categories, {
  as: "category",
  foreignKey: "classSessionId",
});
db.categories.belongsTo(db.classSessions, {
  as: "classSession-categories",
  foreignKey: "classSessionId",
});

db.workshops.hasMany(db.subCategories, {
  as: "subCategory",
  foreignKey: "workshopId",
});
db.subCategories.belongsTo(db.workshops, {
  as: "classSession",
  foreignKey: "workshopId",
});

db.workshops.hasMany(db.categories, {
  as: "category",
  foreignKey: "workshopId",
});
db.categories.belongsTo(db.workshops, {
  as: "classSession",
  foreignKey: "workshopId",
});
db.packageClasses.hasMany(db.subCategories, {
  as: "subCategory",
  foreignKey: "packageClassId",
});
db.subCategories.belongsTo(db.packageClasses, {
  as: "packageClass",
  foreignKey: "packageClassId",
});

db.packageClasses.hasMany(db.categories, {
  as: "category",
  foreignKey: "packageClassId",
});
db.categories.belongsTo(db.packageClasses, {
  as: "packageClass",
  foreignKey: "packageClassId",
});
db.customers.hasMany(db.wishlists, {
  as: "wishlist",
  foreignKey: "customerId",
});
db.wishlists.belongsTo(db.customers, {
  as: "customer",
  foreignKey: "customerId",
});
db.customers.hasMany(db.carts, { as: "cart", foreignKey: "customerId" });
db.carts.belongsTo(db.customers, { as: "customer", foreignKey: "customerId" });

db.customers.hasMany(db.hostReviews, {
  as: "hostReview",
  foreignKey: "customerId",
});
db.hostReviews.belongsTo(db.customers, {
  as: "customer-hostReviews",
  foreignKey: "customerId",
});

db.hosts.hasMany(db.hostReviews, {
  as: "hostReview",
  foreignKey: "hostId",
});
db.hostReviews.belongsTo(db.hosts, {
  as: "customer",
  foreignKey: "hostId",
});

db.packageSessions.belongsTo(db.customers, { through: db.packageTickets });
db.customers.belongsTo(db.packageSessions, { through: db.packageTickets });

db.classSessions.hasOne(db.wishlists, {
  as: "wishlist",
  foreignKey: "classSessionId",
});
db.wishlists.belongsTo(db.classSessions, {
  as: "classSession",
  foreignKey: "classSessionId",
});

db.workshops.hasOne(db.wishlists, {
  as: "wishlist",
  foreignKey: "workshopId",
});
db.wishlists.belongsTo(db.workshops, {
  as: "workshop",
  foreignKey: "workshopId",
});

db.packageClasses.hasOne(db.wishlists, {
  as: "wishlist",
  foreignKey: "packageClassId",
});
db.wishlists.belongsTo(db.packageClasses, {
  as: "packageClasse",
  foreignKey: "packageClassId",
});

db.classSessions.hasOne(db.carts, { as: "cart", foreignKey: "classSessionId" });
db.carts.belongsTo(db.classSessions, {
  as: "classSession",
  foreignKey: "classSessionId",
});

db.workshops.hasOne(db.carts, { as: "cart", foreignKey: "workshopId" });
db.carts.belongsTo(db.workshops, {
  as: "workshop",
  foreignKey: "workshopId",
});

db.packageClasses.hasOne(db.carts, {
  as: "cart",
  foreignKey: "packageClassId",
});
db.carts.belongsTo(db.packageClasses, {
  as: "packageClass",
  foreignKey: "packageClassId",
});

module.exports = db;
