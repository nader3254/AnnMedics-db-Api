

const UserModel = require('../models/users.model');
const { ObjectId } = require('mongodb');

/**
 * 
 * @param {this should be req.params.id} rawID 
 * @returns the parsed id
 */
function ParseID(rawID)
{
        let id = rawID.replace("id=", ":");   
        return newid = id.substring(2, id.length - 1); 
}
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
        res.status(400).send("Error retrieving user");
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
    try {
        allowPermissions(res, "OPTIONS, GET");
        const newUser = await UserModel.find();
        console.log(newUser);
        res.write(JSON.stringify(newUser));
        res.end("");
    }catch (err)
    {
        console.log("error: ", err);
        res.status(400).send("Error retrieving user");
    }

}

/**
 * this function will be used for
 * GET url/users/:id
 * use it like this url/users/<id>
 * @param { paramter for the request } req 
 * @param { paramter for the response } res 
 */
let getUser_id = async (req, res) => {

   // let __id = new ObjectId("643dfa855184363f2e6eaefd"); ok
   // let __id = req.params.id;
    try {
     
       // let __id = new ObjectId(ParseID(req.params.id));
        let __id = new ObjectId(req.params.id);
        let tmpObj = await UserModel.find({ "_id": __id });
        console.log(tmpObj);
        res.write(JSON.stringify(tmpObj));
        res.end("");
    }
    catch(err) {
    console.error(err);
    res.status(400).send("Error retrieving user");
  }
}
  
/**
 * this function will be used for
 * PUT url/users/<id>
 * @param { paramter for the request } req 
 * @param { paramter for the response } res 
 */
const updateUser = async (req, res) =>
{
     try {
     
       // let __id = new ObjectId(ParseID(req.params.id));
        let __id = new ObjectId(req.params.id);
        let tmpObj = await UserModel.findOneAndUpdate({ "_id": __id },req.body);
        console.log(tmpObj);
        res.write(JSON.stringify(tmpObj));
        res.end("");
    }
    catch(err) {
    console.error(err);
    res.status(400).send("Error retrieving user");
  }
    
    
}
 
/**
 * this function will be used for
 * DELETE url/users/<id>
 * @param { paramter for the request } req 
 * @param { paramter for the response } res 
 */
const deleteUser = async (req, res) =>
{
    try
    {
       // let __id = new ObjectId(ParseID(req.params.id));
        let __id = new ObjectId(req.params.id);
        let tmpObj = await UserModel.deleteOne({ "_id": __id });
        console.log(tmpObj);
        res.write("deleteded successfully");
        res.end("");
    }
    catch(err) {
    console.error(err);
    res.status(400).send("Error retrieving user");
  }
}
    
/**
 * this function will be used for
 * DELETE url/users/
 * @param { paramter for the request } req 
 * @param { paramter for the response } res 
 */
const deleteAllUser = async (req, res) =>
{
    try
    {
       // let __id = new ObjectId(ParseID(req.params.id));
        let __id = new ObjectId(req.params.id);
        let tmpObj = await UserModel.deleteMany({ });
        console.log(tmpObj);
        res.write("deleted successfully");
        res.end("");
    }
    catch(err) {
    console.error(err);
    res.status(400).send("Error retrieving user");
  }
}
   
module.exports = {
    CreateUser,
    getAllUsers,
    getUser_id,
    updateUser,
    deleteAllUser,
    deleteUser
}