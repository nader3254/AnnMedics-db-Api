const { Int32 } = require("mongodb");
const userdb = require("../db/db");
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    position: String,
    hospital: String
});

userdb.init();
const mdb = userdb.get();
console.log(userdb._db);
const _Schema = mdb.model("User", UserSchema);

/**
 * 
 * @returns the model schema
 */
// function schema()
// {
//     return _Schema;
// }
module.exports = _Schema;

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