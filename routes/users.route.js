const express = require('express')
const users = require('../controllers/database.controller')
const app = express.Router()
app.use(express.json()); // take care of this mother fucker ,needed for req.bodu or you will get undefined

app.post('/',users.CreateUser);
app.get("/",users.getAllUsers)




module.exports = app;