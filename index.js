const express = require('express');
const app = express()

app.get('/mytestapp', function(request, response) {
    console.log("My get function works");
        response.send('Hello World!');
});

app.get('/chatmessage', function(request, response) {
    console.log("Sending Chat Communication");
        response.render('index')
});

app.listen(process.env.PORT || 3000, function(){
    console.log("App listening on port 3000");
});
    