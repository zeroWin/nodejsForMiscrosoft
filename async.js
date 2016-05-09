// JavaScript Document
//var async = require('async');
//
//async.waterfall(
//[
//	function(cb)
//	{ 
//		console.log('start:'); cb(null,3); 
//	},
//	function(n,cb){console.log('next:',n); n++ ;cb(null,n);}
//],function(err,result){
//	console.log('err:',err);
//	console.log('result',result);
//});
var rp = require('request-promise');
var options = {
    uri: 'https://oxfordhk.azure-api.net/academic/v1.0/evaluate',
    qs: {
        expr: 'RId=2140251882', // -> uri + '?access_token=xxxxx%20xxxxx'
		count: '3',
		attributes: 'Id,AA.AuId,AA.AfId,F.FId,J.JId,C.CId,RId',
		'subscription-key': 'f7cc29509a8443c5b3a5e56b0e38b5a6'
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (repos) {
		console.log(repos);
		console.log(repos.entities[0].Id);
		console.log(repos.entities[1].Id);
    })
    .catch(function (err) {
        // API call failed...
		console.log(err)
    });