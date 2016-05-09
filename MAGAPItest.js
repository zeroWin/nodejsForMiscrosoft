var https = require('https');  
  
//https.get("https://oxfordhk.azure-api.net/academic/v1.0/evaluate?expr=Id=2140251882&count=10000&attributes=Id,AA.AuId,AA.AfId,F.FId,J.JId,C.CId,RId&subscription-key=f7cc29509a8443c5b3a5e56b0e38b5a6", function(res) { 
https.get("https://oxfordhk.azure-api.net/academic/v1.0/evaluate?expr=RId=2140251882&count=10000&attributes=Id,AA.AuId,AA.AfId,F.FId,J.JId,C.CId,RId&subscription-key=f7cc29509a8443c5b3a5e56b0e38b5a6", function(res) { 
//https.get("https://oxfordhk.azure-api.net/academic/v1.0/evaluate?expr=Composite(AA.AuId=2145115012)&count=10000&attributes=Id&subscription-key=f7cc29509a8443c5b3a5e56b0e38b5a6", function(res) { 

//	console.log("Got response: " , res); 
//	console.log('headers: \n', res.headers);
//	console.log('statusMessage: ',res.statusMessage);

	res.on('data', function(d) {
		process.stdout.write(d);
//		var entitiesVal = JSON.parse(d.toString()).entities;
//		console.log(entitiesVal);
//		console.log(entitiesVal[0].Id);
//		console.log(entitiesVal[0].RId[0]);
//		console.log(entitiesVal[0].AA[0]);
	});
	//var str = JSON.stringify(res);
	//console.log(str);
	}).on('error', function(e) { 
	console.log("Got error: " + e.message); 
});