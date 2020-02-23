const express = require('express');
const app = express()
const bodyParser = require('body-parser');

let mess = ''

//authentication

var auth = require('http-auth');
var basic = auth.basic({
        realm: "Simon Area."
    }, (username, password, callback) => { 
        // Custom authentication
        // Use callback(error) if you want to throw async error.
        callback(username === "admin" && password === "password");
    }
);

app.use(auth.connect(basic));

///authentication end


var mysql = require('mysql');


var vhost = require('vhost');

express()
.use(vhost('verify.localhost:3000', require('/verify/').app))
.use(vhost('sync.mysite.com', require('/path/to/sync').app))
.listen(80)



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs')

const url = require('url');

app.get('/checkapps', function(req, res) {
    console.log("appschecking")
    
    const reqUrl = url.parse(req.url, true);
    var name = 'World';
    if (reqUrl.query.name) {
        name = reqUrl.query.name
    }
    
    if (reqUrl.query.pass) {
        pass = reqUrl.query.pass
        name = name + " VERIFIED"
    }

    if (pass = "hahalollmao") {
        var response = {
        "text": "Hello " + name
        };
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
});


app.post('/chatmessage', function(request, response) {
    console.log("Sending Chat Communication");
        response.render('index.ejs')
        
        
        mess = request.body.mes
        console.log(request.body.mes);
});

