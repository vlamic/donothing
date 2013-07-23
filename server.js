var fs = require('fs');
var express = require('express');

fs.appendFile('api.log', 'Application started at ' + new Date().toISOString() + '\n', function (err) {

});

app.get('/', function(req, res){
  res.send(200);
});


app.listen(80);
