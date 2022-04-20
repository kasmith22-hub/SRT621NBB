const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
bookName:{
type: String,
required: true,
trim: true
} ,
Author: {
type: String,
required: true,
trim: true
},

Purchaselink: {
type: String,
required: true
},
 });
//  module.exports = mongoose.model("booksubscribers", bookSchema);
 module.exports = mongoose.model("subscriber", bookSchema);
