const mongoose = require("mongoose");

const Schema = mongoose.Schema;

 const customerSchema = new Schema({
   name: {
     type: String,
     required: true,
     unique: true,
     },
     age: {
     type: Number,
     required: true,
     unique: true,
     },
     position: {
     type: String,
     required: true,
     unique: true,
     },
     hospital: {
     type: String,
     required: true,
     unique: true,
   },
 });
// const customerSchema = new Schema({

//     "name": {    type: String,  required: false,unique: true},
//     "age": {     type: String,  required: false,unique: false},
//     "position":{ type: String,  required: false,unique: false},
//     "hospital":{ type: String,  required: false,unique: false},

// });
const Customer = mongoose.model("aRX5Rbcd", customerSchema);

module.exports = Customer;