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
    .catch(err => res.status(500).json({message: 'Whoops, something blew up'}));
})

module.exports = router;