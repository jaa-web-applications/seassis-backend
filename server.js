'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json());
app.use(cors());

const Index = require('./Controllers/Index.controller');

const {
  createFeedback,
  getFeedback,
  createService,
  getService,
  updateService,
  deleteService,
} = require('./Controllers/Assist.controller');

// const FeedbackSeed = require('./Helpers/FeedbackSeed.seed');
// const RequestsSeed = require('./Helpers/RequestsSeed.seed');

// FeedbackSeed();
// RequestsSeed()

const PORT = process.env.PORT;
const MONGO_URL_ATLAS = process.env.MONGO_URL_ATLAS;
mongoose.connect(MONGO_URL_ATLAS);

app.get('/', Index);
app.post('/feedback', createFeedback);
app.get('/feedback', getFeedback);

app.post('/services', createService);
app.get('/services', getService);
app.put('/services/:service_Id', updateService);
app.delete('/services/:service_Id', deleteService);

app.listen(PORT, () => {
  console.log('Server Started on Port', PORT);
});
