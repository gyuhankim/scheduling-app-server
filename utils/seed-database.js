'use strict';

const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');

const TimeSlot = require('../models/timeslot');
const seedTimeSlots = require('../seed-data');

console.log(`Connecting to MongoDB at ${DATABASE_URL}`);
mongoose.connect(DATABASE_URL)
  .then(() => {
    console.log('Dropping Database');
    return mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    console.log('Seeding Database');
    return TimeSlot.insertMany(seedTimeSlots);
  })
  .then(() => {
    console.log('Disconnecting...');
    return mongoose.disconnect();
  })
  .catch(err => {
    console.log(err);
    return mongoose.disconnect();
  })