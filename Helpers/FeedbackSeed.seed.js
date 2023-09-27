'use strict';

const feedbackModel = require('../Models/Feedback.model');

const FeedbackSeed = () => {
  const firstFeedback = new feedbackModel({
    name: 'Ahmad',
    mobile: '0787002130',
    serviceType: 'Road',
    email: 'ahmad@gmail.com',
    feedback: 'Great Service they help us in 5 minutes ',
  });
  firstFeedback.save();

  const SecondFeedback = new feedbackModel({
    name: 'Hussam',
    mobile: '0789002130',
    serviceType: 'Home',
    email: 'Hussam@gmail.com',
    feedback: 'Great Service they help us in 10',
  });
  SecondFeedback.save();

  const ThirdFeedback = new feedbackModel({
    name: 'Emad',
    mobile: '0788002130',
    serviceType: 'Road',
    email: 'Emad@gmail.com',
    feedback: 'GOOD Service they help us in 25 minutes ',
  });
  ThirdFeedback.save();

  console.log('The Data Has been saved in the Database Successfully');
};

module.exports = FeedbackSeed;
