
var express = require('express');
var bodyParser = require('body-parser');
var app = express(); 

app.use(bodyParser.json()); {
    
    var name = "Lindsey";
    var location = "location: Provo, Utah";
    var hobbies = ["Tennis", "swimming", "volleyball"];
    var occupations = ["babysitter", "dental hygienist", "jr. developer"];
 
    
    app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS', 'GET', 'POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With , Content-Type, Accept');
    next();
});
    
    app.get('/name', function(request, response) {
    response.send({name: name});
});
    
      app.get('/location', function(request, response) {
    response.send({location: location});
});

  app.get('/hobbies', function(request, response) {
    response.send({hobbies:hobbies});
});

  app.get('/occupations', function(request, response) {
    response.send({occupations: occupations});
});

  app.get('/occupations/:latest', function(request, response) {
    response.send({occupations: occupations[occupations.length -1] });
});

};


app.listen(9000); 
















