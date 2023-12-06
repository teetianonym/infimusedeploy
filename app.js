const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");

const hostRoutes = require("./routes/hostRoutes");
const classSessionRoutes = require("./routes/classSessionRoutes");
const packageSessionRoutes = require("./routes/packageSessionRoute");
const workshopClassRoutes = require("./routes/workshopClassRoutes");
const workshopRoutes = require("./routes/workshopRoutes");
const packageClassRoutes = require("./routes/packageClassRoutes");
const guestRoutes = require("./routes/guestRoutes");
const customerRoutes = require("./routes/customerRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const reviewCommentRoutes = require("./routes/reviewCommentRoutes");

const app = express();
dotenv.config();
const port = process.env.PORT;

const corsOption = {
  origin: "*",
};

db.authenticate()
  .then(() => {
    console.log(`databse connected succesfull`);
  })
  .catch((err) => {
    console.log("Error :" + err);
  });

app.use(express.json());
app.use(cors(corsOption));

app.use("/api/v1/hosts", hostRoutes);
app.use("/api/v1/class-sessions", classSessionRoutes);
app.use("/api/v1/package-sessions", packageSessionRoutes);
app.use("/api/v1/package-classes", packageClassRoutes);
app.use("/api/v1/workshops", workshopRoutes);
app.use("/api/v1/workshop-classes", workshopClassRoutes);
app.use("/api/v1/guests", guestRoutes);
app.use("/api/v1/customers", customerRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/review-comments", reviewCommentRoutes);

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
