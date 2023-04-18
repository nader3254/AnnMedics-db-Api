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
    try
    {
        //allowPermissions(res, "OPTIONS, POST");
        console.log( req.body);
        const newUser = new UserModel(req.body);
        await UserModel.create(newUser);
        res.send("Customer added");
        res.end()

    } catch (err)
    {
        console.log("error: ", err);
    }
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