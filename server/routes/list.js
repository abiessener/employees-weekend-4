var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function(req,res){
console.log('/list GET hit');
res.sendStatus(200);
});

router.post('/', function(req,res){
    console.log('/list POST hit');
    res.sendStatus(200); 
});

router.put('/', function(req,res){
    console.log('/list PUT hit');
    res.sendStatus(200);
});

module.exports = router;