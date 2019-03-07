'use strict';

const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
  timeID: {
    type: Number, 
    required: true
  },
  startTime: {
    type: String, 
    required: true
  },
  endTime: {
    type: String, 
    required: true
  },
  firstName: String,
  lastName: String,
  phoneNumber: String,
  available: Boolean
})

timeSlotSchema.set('toObject', {
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  }
});

module.exports = mongoose.model('TimeSlot', timeSlotSchema);