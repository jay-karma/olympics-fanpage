const Fans = require('../models/fans');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    Fans.find()
    .sort({cheers: -1, countryName: 1})
    .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
});


router.post('/', (req, res) => {
    // Country name, Fans won
    Fans.countDocuments({countryName: req.body.countryName}, function (err, count){ 
        
        if(count === 0){
            const newEntry = new Fans({
                countryName: req.body.countryName,
                cheers: 1,
            }); 
            newEntry.save((err, result) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send('Cheer count incremented');
                }
            });
        } else {
            Fans.findOneAndUpdate({countryName: req.body.countryName}, {$inc : {'cheers' : 1}}, 
            {new: true}, function(err, doc){
                if(err){
                    res.send(err);
                } else {
                    res.send('Cheer count incremented');
                }
            });
        }
    }); 
})


module.exports = router;