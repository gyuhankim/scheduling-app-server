'use strict';

const express = require('express');
const mongoose = require('mongoose');

const TimeSlot = require('../models/timeslot');

const router = express.Router();

router.get('/schedule', (req, res, next) => {
  TimeSlot.find()
    .then(results => {
      res.json(results);
    })
    .catch(() => res.status(500).json({message: 'Whoops, something blew up!'}));
})

router.post('/schedule', (req, res, next) => {
  const { timeID, firstName, lastName, phoneNumber, available } = req.body;
  const updatedAppointment = { timeID, firstName, lastName, phoneNumber, available };

  TimeSlot.findOneAndUpdate({ timeID }, updatedAppointment, { new: true })
    .then(result => {
      res.json(result);
    })
    .catch(() => {
      res.status(500).json({message: 'Whoops, something blew up while trying to update schedule!'})
    })
})

module.exports = router;