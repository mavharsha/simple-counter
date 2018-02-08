var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')

var app = express()


app.use(morgan('common'))
// respond with "hello world" when a GET request is made to the homepage
// app.get('/home/:id', function (req, res) {
//     console.log("Params are", req.params.id);
//     res.json({ message: "Home"})
//   })

// app.get('/', function (req, res) {
//   res.json({ message: "Hello World"})
// })

// app.get('/secret/:token', function (req, res, next) {
//     var token = req.params.token;
//     if(token === 'good') {
//         next();
//     }
//     res.send('you are bad');
//   }, function (req, res) {
//     res.send('You are good.')
//   })

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/health', (req, res) => { res.jsonp({message: 'Up and running!'})});

app.post('/counter', (req, resp) => { console.log(req.body); resp.jsonp({counter: req.body.counter});});

app.listen(3000, () => console.log("Listening at localhost:3000"));