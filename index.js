//This section list the required libraries
var express = require("express");
//Create an instance of express server
var app = express(); 

app.get("/",function(request,respond){
	respond.send('<h1>This is my web app21');
});

app.get("/something",function(request,respond){
	respond.send('<h1>This is something</h>');
});

//Start the express server tp listen to a port in the server
//cannot use Promise here.....
var listener = app.listen(
    process.env.PORT,
    process.env.IP,
    function(){
	console.log("server has started");
	console.log('Listening on port ' + listener.address().port);
});
