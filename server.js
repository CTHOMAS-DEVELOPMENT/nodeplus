var app = require('./app');
var port = process.env.PORT || 3111;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});