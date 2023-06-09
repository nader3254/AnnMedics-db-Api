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

const Customer = mongoose.model("aRX5Rbcd", customerSchema);

module.exports = Customer;