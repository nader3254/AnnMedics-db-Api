//const { Int32 } = require("mongodb");
const mongoose = require("../db/db");
//const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   name: {
     type: String,
     required: true,
     
     },
     age: {
     type: Number,
     required: true,
    
     },
     position: {
     type: String,
     required: true,
    
     },
     hospital: {
     type: String,
     required: true,
    
   },
 });

const User = mongoose.model("users", UserSchema);

module.exports = User;

/**
 * 
 * @returns the model schema
 */
// function schema()
// {
//     return _Schema;
// }


// function getAllUsers()
// {
    
// }

// function getUser(id)
// {
    
// }

// function UpdateUser(id,newUser)
// {
    
// }

// function DeleteUser(id)
// {
    
// }

// function CreateUser(newUser)
// {
    
// }