var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

// takes an employee to edit as data and sends that to the database
router.put('/', function(req,res){
    console.log('/edit PUT hit');

    pool.connect(function(err,db,done){
        if (err){
            console.log('error connecting to db', err);
            res.sendStatus(500);
        } else {
            db.query('UPDATE employees SET firstname=$1, lastname=$2, jobtitle=$3, salary=$4 WHERE id=$5;', [req.body.firstname, req.body.lastname, req.body.jobtitle, req.body.salary, req.body.id], function(err, db){
                done();
                if(err){
                    console.log('error making query:', err);                    
                } else {
                    res.sendStatus(200);
                }
            }); //end query
        }

    }); // end connect
    
}); // end put

module.exports = router;