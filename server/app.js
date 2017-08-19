var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var list = require('./routes/list.js');

var port = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/list', list);

app.listen(port, function(){
    console.log('listening on port', port);
    
});