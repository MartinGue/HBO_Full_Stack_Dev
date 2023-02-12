var http = require('http');
var dt = require('/Users/Martin/Documents/HBO_Full_Stack_Dev/JavaScript/myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});  
  res.write("The date and time are currently: " + dt.myDateTime() + " Hello World!");
  res.end();
}).listen(8080);

