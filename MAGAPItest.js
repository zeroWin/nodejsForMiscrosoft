var https = require('https');  
  
https.get("https://oxfordhk.azure-api.net/academic/v1.0/evaluate?expr=Id=2140251882&count=10000&attributes=Id,AA.AuId,AA.AfId&subscription-key=f7cc29509a8443c5b3a5e56b0e38b5a6", function(res) { 
	console.log("Got response: " , res.statusCode); 
	console.log('headers: \n', res.headers);
	console.log('statusMessage: ',res.statusMessage);
	
	res.on('data', function(d) {
		process.stdout.write(d);
	});
	//var str = JSON.stringify(res);
	//console.log(str);
	}).on('error', function(e) { 
	console.log("Got error: " + e.message); 
});