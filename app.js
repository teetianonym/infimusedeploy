const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

const corsOption = {
  origin: "*",
};
const port = process.env.PORT;

app.use(express.json());
app.use(cors(corsOption));

app.get("/", (req, res) => {
  res.send(`server running`);
});

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
