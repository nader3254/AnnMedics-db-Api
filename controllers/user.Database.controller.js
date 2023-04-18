const UserModel = require('../models/users.model');

/**
 * this function will be used for
 * allowing permissions for ex: react and flutter apps
 * @param { paramter for the request } req 
 * @param { paramter for the response } res 
 */
function allowPermissions(res,option)
{
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods",option);
  res.setHeader("Access-Control-Allow-Headers", "*");
}

/**
 * this function will be used for 
 *  POST url/users
 * @param { paramter for the request } req 
 * @param { paramter for the response } res 
 */
const CreateUser = async (req, res) =>
{
    try
    {
        allowPermissions(res, "OPTIONS, POST");
        console.log( req.body);
        const newUser = new UserModel(req.body);
        await UserModel.create(newUser);
        res.send("Customer added successfully");
        res.end()

    } catch (err)
    {
        console.log("error: ", err);
    }
}

/**
 * this function will be used for
 * GET url/users/
 * @param { paramter for the request } req 
 * @param { paramter for the response } res 
 */
const getAllUsers = async (req, res) =>
{

    allowPermissions(res, "OPTIONS, GET");
    const newUser = await UserModel.find();
    console.log(newUser);
    res.write(JSON.stringify(newUser));
    res.end("");
}

/**
 * this function will be used for
 * GET url/users/
 * @param { paramter for the request } req 
 * @param { paramter for the response } res 
 */
const getUser_id = async (req, res) =>
{
    
}
  
/**
 * this function will be used for
 * GET url/users/
 * @param { paramter for the request } req 
 * @param { paramter for the response } res 
 */
const updateUser = async (req, res) =>
{
    
}
 
/**
 * this function will be used for
 * GET url/users/
 * @param { paramter for the request } req 
 * @param { paramter for the response } res 
 */
const deleteUser = async (req, res) =>
{
    
}
    

module.exports = {
    CreateUser,
    getAllUsers,
    getUser_id,
    updateUser,
    deleteUser
}