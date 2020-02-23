const express = require('express');
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs')

const url = require('url');

var wildcardSubdomains = require('wildcard-subdomains')

app.use(wildcardSubdomains({
    namespace: 's',
    whitelist: ['www', 'app'],
}))

app.listen(3000)

app.get('/', function (req, res) {
    res.send('Visit <a href="verify.localhost:3000">verify.localhost:3000</a> (points back to localhost)')
  })

  app.get('/s/verify/', function(req, res){
    res.send("Meow!")
  })