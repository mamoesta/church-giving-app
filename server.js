var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');


var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', function(req, res) {
 
    console.log("posts!");
    res.json({"success": true});
 
});

var port = 8080;
app.listen(process.env.PORT || port);

console.log("Listening on port:", port)