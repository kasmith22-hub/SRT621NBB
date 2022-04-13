const mongoose = require("mongoose"),
subscriberSchema = mongoose.Schema({
bookName: String,
Author: String,
Purchaselink:String,
 });
 module.exports = mongoose.model("subscribers", subscriberSchema);
// const subscriberSchema = mongoose.Schema({
//   bookName: String,
//   Author: String,
//   Purchaselink:String,
// });