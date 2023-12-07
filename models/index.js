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

db.sequelize
  .sync({ force: false })
  .then(() => console.log(`Database synced`))
  .catch((err) => console.log(err));

module.exports = db;
