var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.readNames().then(function(names) {
        res.render('index', { title: 'Epic App', names: names });
    })

});

module.exports = router;
