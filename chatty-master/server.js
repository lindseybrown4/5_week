var http = require('http');

var messages = [{message: "hello lady"}, {message:"how are you"}]; 

var onRequest = function(req, res) {

	if (req.method === "GET") {

		res.statusCode = 200;

		res.setHeader('Content-Type', 'application/json');

		// Allow any website to access this API
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

		// Don’t allow scripts or iframes execution from domains we don't trust
		res.setHeader('X-XSS-Protection', '1; mode=block');
		res.setHeader('X-Frame-Options', 'SAMEORIGIN');
		res.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");


		// res.writeHead(200, {
		// 	'Connection': 'close',
		// 	'Content-Type': 'applicatoin/json',
		// 	'Access-Control-Allow-Origin': '*'
		// });
		res.end(JSON.stringify(messages));
		
	} else if (req.method === 'POST') {

		res.statusCode = 200;

		res.setHeader('Content-Type', 'application/json');

		// Allow any website to access this API
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

		// Don’t allow scripts or iframes execution from domains we don't trust
		res.setHeader('X-XSS-Protection', '1; mode=block');
		res.setHeader('X-Frame-Options', 'SAMEORIGIN');
		res.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");


       var postData = '';
       req.on('data', function(chunk) {
           postData += chunk.toString();

        });    
        req.on('end', function() {
        	var msg = JSON.parse(postData);
        	
        	messages.push(msg);
            // console.log("Got POST data:");
            // console.log(JSON.parse(postData));      
            res.end(JSON.stringify(messages));
    
       });

       
    }

};

var port = 8000;

http.createServer(onRequest).listen(port);
console.log("i\'m watching you again....", port)


