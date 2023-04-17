const req = require('express/lib/request');
const UserModel = require('../models/users.model');


function allowPermissions(res,option)
{
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods",option);
  res.setHeader("Access-Control-Allow-Headers", "*");
}
const CreateUser = async (req, res) =>
{

    allowPermissions(res, "OPTIONS, put");
    const newUser = UserModel.create(req.body);
    res.write(JSON.stringify(newUser));
    res.end();
}
const getAllUsers = async (req, res) =>
{

    allowPermissions(res, "OPTIONS, GET");
    const newUser = await UserModel.find({name:"ahmed"});
    console.log(newUser);
    //res.write(newUser);
    res.end("unknown");
}
module.exports = {
    CreateUser,
    getAllUsers
}