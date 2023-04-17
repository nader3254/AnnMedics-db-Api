const express = require('express')
const users = require('../controllers/database.controller')
const app = express.Router()


app.put('/', users.CreateUser);
// app.get('/', (req, res) =>
// {
//     res.write("hello from users");
//     res.end();
// });
app.get("/",users.getAllUsers)




module.exports = app;