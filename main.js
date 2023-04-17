
const app = require("./routes/users.route");
const userServices = require("./routes/users.route");
const express = require('express');

const server = express();

server.get("/", (req,res) => {
  res.write("hello world , This is AnnMedics Api");
  res.end();
})
server.use("/users",userServices);




 server.listen(8085);
