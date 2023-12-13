const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

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
const classTicketRoutes = require("./routes/classTicketRoutes");
const locationRoutes = require("./routes/locationRoutes");
const packageTicketRoutes = require("./routes/packageTicketRoutes");
const paymentTransactionRoute = require("./routes/paymentTransactionRoute");
const payoutRoutes = require("./routes/payoutRoutes");
const waitlistRoutes = require("./routes/waitlistRoutes");
const hostReviewRoutes = require("./routes/hostReviewRoutes");
const workshopTicketRoutes = require("./routes/workshopTicketRoute");
const categoriesRoutes = require("./routes/categoryRoutes");
// const categoriesRoutes = require("./controllers/categoryController");

const app = express();
dotenv.config();
const port = process.env.PORT;

const corsOption = {
  origin: "*",
};

app.use(express.json());
app.use(cors(corsOption));

// classess sessions and workshops
app.use("/api/v1/class-sessions", classSessionRoutes);
app.use("/api/v1/package-sessions", packageSessionRoutes);
app.use("/api/v1/workshop-classes", workshopClassRoutes);
app.use("/api/v1/package-classes", packageClassRoutes);
app.use("/api/v1/workshops", workshopRoutes);

// users
app.use("/api/v1/hosts", hostRoutes);
app.use("/api/v1/customers", customerRoutes);
app.use("/api/v1/guests", guestRoutes);

// tickets
app.use("/api/v1/class-tickets", classTicketRoutes);
app.use("/api/v1/package-tickets", packageTicketRoutes);
app.use("/api/v1/workshop-tickets", workshopTicketRoutes);

// payments
app.use("/api/v1/payouts", payoutRoutes);
app.use("/api/v1/transactions", paymentTransactionRoute);

// notifications and comments
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/review-comments", reviewCommentRoutes);

// others
app.use("/api/v1/locations", locationRoutes);
app.use("/api/v1/waitlists", waitlistRoutes);
app.use("/api/v1/host-reviews", hostReviewRoutes);
app.use("/api/v1/categories", categoriesRoutes);

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
