const port = process.env.PORT || 5000
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(port);
module.exports = app;

console.log('Listening at port ' + port);
