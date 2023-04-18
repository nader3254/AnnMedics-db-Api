const express = require("express");
const mongoose = require("mongoose");
const Customer = require("./models/customer");

const url = "mongodb+srv://nader:aabbccdd@cluster0.miyrein.mongodb.net/annMedics?retryWrites=true&w=majority";


const app = express();
app.use(express.json());

const port = 8085;
const uri = url;

mongoose.connect(uri, {
  useNewUrlParser: true,
 // useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully.");
});

app.get("/customerlist", async (req, res) => {
  await Customer.find({}, (err, result) => {
    console.log("customer from db: ", result);
    res.send(result);
  });
});

app.post("/customer", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    const newCustomer = new Customer(req.body);

    await Customer.create(newCustomer);
      res.send("Customer added");
      res.end()
  } catch (err) {
    console.log("error: ", err);
  }
});

app.listen(port, () => {
  console.log(`App is listening at http://locahost:${port}`);
});



