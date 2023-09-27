const mongoose = require('mongoose');

const HelpSchema = new mongoose.Schema({
  Pesron_Email:{type:String},
  Pesron_Name: { type: String },
  Person_Description: { type: String },
  Pesron_Phone: { type: String },
  Pesron_Address: { type: String },  
  map: { type: String },
});

const HelpModel = mongoose.model('helpRequests', HelpSchema);

module.exports = HelpModel;
