const Medal = require('../models/medal');
const express = require('express');

const router = express.Router();

// Show medals
router.get('/', (req, res) => {
    Medal.find()
    .sort({goldCount: -1, silverCount: -1, bronzeCount: -1, countryName: 1})
    .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
});

router.post('/add', (req, res) => {
    // Country name, medal won
    Medal.countDocuments({countryName: req.body.countryName}, function (err, count){ 
        const newEntry = new Medal({
            countryName: req.body.countryName,
            goldCount: req.body.goldCount,
            silverCount: req.body.silverCount,
            bronzeCount: req.body.bronzeCount,
        });
        if(count === 0){ 
            newEntry.save((err, result) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(req.body.countryName) + ' inserted');
                }
            });
        } else {
            Medal.findOneAndUpdate({countryName: req.body.countryName}, { "$set": { "goldCount": req.body.goldCount, "silverCount": req.body.silverCount, bronzeCount: req.body.bronzeCount,}}, {upsert: true}, function(err, doc){
                if(err){
                    console.log("Something wrong when updating data!");
                } else {
                    console.log(doc);
                }
            });
        }
        res.send('Updated');
        
    }); 
})

module.exports = router;