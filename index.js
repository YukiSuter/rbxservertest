const express = require('express');
const app = express()
const bodyParser = require('body-parser');

let mess = ''

//authentication



///authentication end








app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send(`Hello from express - ${req.user}!`);
});

app.get('/mytestapp', function(request, response) {
    console.log("My get function works");
        response.send('Hello World!');
});

app.get('/chatmessage', function(request, response) {
    response.render('index.ejs');
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
});

app.get('/requestchatmessage', function(request, response) {
    console.log("SendingMessage")
        response.send(mess)
});

app.get('/addapp', function(request, response) {
    console.log("ApplicationRequestAgknowledged")
        response.send(request)
});

app.listen(process.env.PORT || 3000, function(){
    console.log("App listening on port 3000");
});

app.post('/chatmessage', function(request, response) {
    console.log("Sending Chat Communication");
        response.render('index.ejs')
        
        
        mess = request.body.mes
        console.log(request.body.mes);
});

