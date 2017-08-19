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
            db.query('SELECT * FROM employees ORDER BY is_active, id', function(err,result){
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
    
    pool.connect(function(err,db,done){
        if (err){
            console.log('error connecting to db:', err);
            res.sendStatus(500);
        } else {
            db.query('INSERT INTO employees (firstname, lastname, jobtitle, salary) VALUES ($1, $2, $3, $4);', [req.body.firstname, req.body.lastname, req.body.jobtitle, req.body.salary], function(err, db){
                done();
                if(err){
                    console.log('error making query:', err);                    
                } else {
                    res.sendStatus(201);
                }
            }); // end query
        }
    }); // end connect
}); // end POST

router.put('/:id', function(req,res){
    console.log('/list PUT hit', req.params.id);

    pool.connect(function(err,db,done){
        if (err){
            console.log('error connecting to db', err);
            res.sendStatus(500);
        } else {
            db.query('UPDATE employees SET is_active=$1 WHERE id=$2;', [req.body.active, req.params.id], function(err, db){
                done();
                if(err){
                    console.log('error making query:', err);                    
                } else {
                    res.sendStatus(200);
                }
            }); //end query
        }

    }); // end connect
    
});

module.exports = router;