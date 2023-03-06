require("dotenv").config();

const app = require("./app");
const mongoose = require("mongoose");

console.log(process.env.NODE_ENV);

const hostname = "localhost";
const port = 3000;
const test = 3;

let DB_URL = process.env.DB_URL;
DB_URL = DB_URL.replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("open", () => console.log("Connected to database"));
db.on("error", (err) => console.log(err));

app.listen(port, hostname, () => {
  console.log(`Server running on ${hostname}:${port}`);
});
