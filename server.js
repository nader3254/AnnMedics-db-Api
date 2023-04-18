
//const userRoutes = require("./routes/users.route");
const userServices = require("./routes/users.route");
const express = require('express');
var app = express();

const port = 8085;


app.use(express.json());
app.use("/users", userServices);

app.get("/", (req,res) => {
  res.write("hello , This is AnnMedics Api");
  res.end();
})

app.listen(port);

