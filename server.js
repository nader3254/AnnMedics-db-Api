
//const userRoutes = require("./routes/users.route");
const userServices = require("./routes/users.route");
const express = require('express');

var app = express();
app.use(express.json());

app.listen(8085);
 
app.get("/", (req,res) => {
  res.write("hello world , This is AnnMedics Api");
  res.end();
})
app.use("/users",userServices);





