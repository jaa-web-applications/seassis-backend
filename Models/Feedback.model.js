'use strict';

const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: String },
  serviceType: { type: String },
  feedback: { type: String },
  pospol: { type: Array },
});

const feedbackModel = mongoose.model('feedback', feedbackSchema);

module.exports = feedbackModel;
