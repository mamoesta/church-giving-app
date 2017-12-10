/*
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.use(router);
app.listen(3333, function (){
    console.log('Server started');
})
*/
var stripe = require('stripe')('sk_test_0uDil0LNazbMsg8KeZjElt4U');
var express  = require('express');
var app      = express();                               
var morgan = require('morgan');            
var bodyParser = require('body-parser');    
var cors = require('cors');
var router = express.Router();

app.use(morgan('dev'));  
app.use(bodyParser.urlencoded({'extended':'true'}));                                                
app.use(cors());

router.post('/processpay', function (request, response){
    var stripetoken = request.body.stripetoken;
    var amountpayable = request.body.amount;
    var charge = stripe.charge.create({
        amount: amountpayable,
        currency: 'usd',
        description: 'Sample transaction',
        source: stripetoken
    }, function (err, charge) {
        if(err)
            console.log(err);
        else
            response.send({success: true});
            console.log(charge);
    
    })
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.static('www'));
app.use(router);
app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), function(){
    console.log('sever started listening on port ' + app.get('port'));
});


/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 
app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port yo mamma shut it boiiiii ' + app.get('port'));
});
*/