const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");

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

app.get("/", (req, res) => {
  res.send(`server running`);
});

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
