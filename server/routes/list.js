var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function(req,res){
    console.log('/list GET hit');
    pool.connect(function(err,db,done){
        if(err){
            console.log('error connecting to db:', err);
            res.sendStatus(500);
        } else {
            db.query('SELECT * FROM employees', function(err,result){
                done();
                if(err){
                    console.log('error making query');
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            }); // end query
        }
    }); // end connect
}); // end GET

router.post('/', function(req,res){
    console.log('/list POST hit');
    res.sendStatus(200); 
});

router.put('/', function(req,res){
    console.log('/list PUT hit');
    res.sendStatus(200);
});

module.exports = router;