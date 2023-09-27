'use strict';

const serviceModel = require('../Models/Service.model');

const ServiceSeed = () => {
  const firstService = new serviceModel({
    Pesron_Name: 'TEST1',
    Pesron_Addres: 'TEST1',
    Pesron_Phone: '07777777',
    Person_Description: 'Nothing!',
    map: 'https://maps.locationiq.com/v3/staticmap?key=pk.cbecb2703474c628d6f82047cd751d62&zoom=18&center=31.917908599999997,35.919928299999995&format=jpg',
  });
  firstService.save();

  const SecondService = new serviceModel({
    Pesron_Name: 'TEST2',
    Pesron_Addres: 'TEST2',
    Pesron_Phone: '07777777',
    Person_Description: 'Nothing!',
    map: 'https://maps.locationiq.com/v3/staticmap?key=pk.cbecb2703474c628d6f82047cd751d62&zoom=18&center=31.917908599999997,35.919928299999995&format=jpg',
  });
  SecondService.save();

  const ThirdService = new serviceModel({
    Pesron_Name: 'TEST3',
    Pesron_Addres: 'TEST3',
    Pesron_Phone: '07777777',
    Person_Description: 'Nothing!',
    map: 'https://maps.locationiq.com/v3/staticmap?key=pk.cbecb2703474c628d6f82047cd751d62&zoom=18&center=31.917908599999997,35.919928299999995&format=jpg',
  });
  ThirdService.save();

  console.log('The Data Has been saved in the Database Successfully');
};

module.exports = ServiceSeed;
