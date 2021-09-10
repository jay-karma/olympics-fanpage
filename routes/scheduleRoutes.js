const Schedule = require('../models/schedule');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const countryNameQ = req.query.countryName;
    console.log(countryNameQ);
    const dayQ = req.query.day;
    if (typeof(dayQ) != "undefined" && typeof(countryNameQ) != "undefined") {
        Schedule.find({'day': dayQ, countryNames: countryNameQ} )
        .sort({day: 1, startTime: 1})
        .then(result => {
            res.json(result);
          })
          .catch(err => {
            console.log(err);
          });
    } else if (typeof(dayQ) != "undefined") {
        Schedule.find({'day': dayQ})
        .sort({day: 1, startTime: 1})
        .then(result => {
            res.json(result);
          })
          .catch(err => {
            console.log(err);
          });
    } else if (typeof(countryNameQ) != "undefined") {
        Schedule.find({countryNames: countryNameQ} )
        .sort({day: 1, startTime: 1})
        .then(result => {
            res.json(result);
          })
          .catch(err => {
            console.log(err);
          });
    } else {
        Schedule.find()
        .sort({day: 1, startTime: 1})
        .then(result => {
            res.json(result);
          })
          .catch(err => {
            console.log(err);
          });
    }

})

module.exports = router;