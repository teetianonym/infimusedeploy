const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");

const hostRoutes = require("./routes/hostRoutes");
const classSessionRoutes = require("./routes/classSessionRoutes");

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
    console.log(err);
  });

app.use(express.json());
app.use(cors(corsOption));

app.use("/api/v1/hosts", hostRoutes);
app.use("/api/v1/class-sessions", classSessionRoutes);

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
