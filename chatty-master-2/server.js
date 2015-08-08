//run npm init on he command line

//run npm install --save express on the command line

//Here in the code add these lines ofcode to get express started: 

var express = require('express'); 
var bodyParser = require('body-parser');
var app = express(); 

app.use(bodyParser.json()); {
    
var messages = ["hello lady", "how are you", "Dev 4 life"];

// Step 8 goes here 
//the slash means nothing below 
app.get('/', function(request, response) {
    response.send(JSON.stringify(messages));
});

app.post('/', function(reqie, respie){
   //Inside your listening function for post get the body out
   //and add it to your messages
   
    var newMessage = reqie.body.message; //body parser does not handle plain strings, only json. unless you go inside the body and put .message
    messages.push(newMessage); 
    
    respie.send("hello buddy");
    
 });
 
 app.put('/api/person/:id', function(req, res) {
     var ourId = req.params.id; 
     res.send("Your id is " + ourId);
     
     
     //req.params." something" tells it what parameter to pull out of the url. to the right of the colon
     
 })
    
    // or res.end(); 
    // res.end(); //means "we're done", if you want to send it it's "res.send();"" 
    //Example of a body we're getting
    // {
    //     "message":"We are winners"
    // }
    
//start the app listening: app.listen(8080);
app.listen(8080); 


}; 




// Make a POST endpoint that will look very much like your GET, but that reads req.body to get the message data.
// In order to get the POST data without using .on('data') and .on('end'), we'll use bodyParser:



























// var http = require('http');

// var messages = [{message: "hello lady"}, {message:"how are you"}]; 

// var onRequest = function(req, res) {

// 	if (req.method === "GET") {

// 		res.statusCode = 200;

// 		res.setHeader('Content-Type', 'application/json');

// 		// Allow any website to access this API
// 		res.setHeader('Access-Control-Allow-Origin', '*');
// 		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
// 		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

// 		// Don’t allow scripts or iframes execution from domains we don't trust
// 		res.setHeader('X-XSS-Protection', '1; mode=block');
// 		res.setHeader('X-Frame-Options', 'SAMEORIGIN');
// 		res.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");


// 		// res.writeHead(200, {
// 		// 	'Connection': 'close',
// 		// 	'Content-Type': 'applicatoin/json',
// 		// 	'Access-Control-Allow-Origin': '*'
// 		// });
// 		res.end(JSON.stringify(messages));
		
// 	} else if (req.method === 'POST') {

// 		res.statusCode = 200;

// 		res.setHeader('Content-Type', 'application/json');

// 		// Allow any website to access this API
// 		res.setHeader('Access-Control-Allow-Origin', '*');
// 		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
// 		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

// 		// Don’t allow scripts or iframes execution from domains we don't trust
// 		res.setHeader('X-XSS-Protection', '1; mode=block');
// 		res.setHeader('X-Frame-Options', 'SAMEORIGIN');
// 		res.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");


//        var postData = '';
//        req.on('data', function(chunk) {
//            postData += chunk.toString();

//         });    
//         req.on('end', function() {
//         	var msg = JSON.parse(postData);
        	
//         	messages.push(msg);
//             // console.log("Got POST data:");
//             // console.log(JSON.parse(postData));      
//             res.end(JSON.stringify(messages));
    
//        });

       
//     }

// };

// var port = 8000;

// http.createServer(onRequest).listen(port);
// console.log("i\'m watching you again....", port)


