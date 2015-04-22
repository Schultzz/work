/**
 * Created by Morten on 21/04/15.
 */
var express = require('express');
var router = express.Router();
var dataGenerator = require('../libs/dataGenerator');

/* GET home page. */
router.get('/addresses/:amount/:data', function(req, res, next) {

    var amount = req.params.amount;
    var data = req.params.data;

    res.end(JSON.stringify(dataGenerator.getData(amount, data)));

});

module.exports = router;
