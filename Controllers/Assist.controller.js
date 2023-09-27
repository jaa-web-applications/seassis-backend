'use strict';
require('dotenv').config();
const { default: axios } = require('axios');
const { response, request } = require('express');
const mailgun = require('mailgun-js');

const feedbackModel = require('../Models/Feedback.model');
const createFeedback = async (request, response) => {
  const { name, email, mobile, serviceType, feedback } = request.body;
  let pospol = [];
  await axios
    .post('https://sentim-api.herokuapp.com/api/v1/', { text: `${feedback}` })
    .then((createResponse) => {
      pospol.push(createResponse.data.result.type);
      pospol.push(createResponse.data.result.polarity);
    })
    .catch((error) => {
      console.log(error);
    });
  const newFeedback = new feedbackModel({
    name,
    email,
    mobile,
    serviceType,
    feedback,
    pospol,
  });

  newFeedback.save();
  response.json(newFeedback);
};

const getFeedback = (request, response) => {
  feedbackModel.find((error, feedbackData) => {
    response.json(feedbackData);
  });
};

const HelpModel = require('../Models/Service.model');
const createService = (request, response) => {
  const {
    Pesron_Email,
    Pesron_Name,
    Person_Description,
    Pesron_Phone,
    Pesron_Address,
    map,
  } = request.body;
  const newService = new HelpModel({
    Pesron_Email,
    Pesron_Name,
    Person_Description,
    Pesron_Phone,
    Pesron_Address,
    map,
  });

  newService.save();
  const api_key = process.env.EMAIL_API_KEY;
  const DOMAIN = process.env.EMAIL_DOMAIN;
  const COMPANY_EMAIL = process.env.COMPANY_EMAIL;
  const mg = mailgun({ apiKey: api_key, domain: DOMAIN });
  const data = {
    from: `${Pesron_Name} ${Pesron_Email}`,
    to: `${COMPANY_EMAIL}`,
    subject: 'Service Request',
    text: `
           |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
           |        | ${Pesron_Name}        |  Name                            
           |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
           |        | ${Person_Description} |  Problem          
           |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
           |        | ${Pesron_Phone}       |  Phone  
           |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
           |        | ${Pesron_Address}     |  Address       
           |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
           |        | ${map}                |  Map         
           |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
           `,
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
  response.json(newService);
};

const getService = (request, response) => {
  HelpModel.find((error, serviceData) => {
    response.json(serviceData);
  });
};

const updateService = (request, response) => {
  const { Pesron_Phone, Person_Description } = request.body;
  const ServiceId = request.params.service_Id;

  HelpModel.findByIdAndUpdate(
    { _id: ServiceId },
    { Pesron_Phone, Person_Description },
    { new: true },
    (error, updateservicesdata) => {
      response.json(updateservicesdata);
    }
  );
};

const deleteService = (request, response) => {
  console.log(request.params);
  const ServiceId = request.params.service_Id;
  console.log('in deleteservice');

  HelpModel.deleteOne({ _id: ServiceId }, (error, deletedData) => {
    console.log('in delete function');
    response.json(deletedData);
  });
};

module.exports = {
  createService,
  getService,
  createFeedback,
  getFeedback,
  updateService,
  deleteService,
};
