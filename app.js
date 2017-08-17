var express = require('express');
var app = express();
var cors = require('cors');
var Twit = require('twit');
var config = require('./config')

var T = new Twit({
	consumer_key: config.TConsumerKey,
	consumer_secret: config.TConsumerKeySecret,
	access_token: config.TAccessToken,
	access_token_secret: config.TAccessTokenSecret,
	timeout_ms: 60*1000
})

app.use(function(request, response, next){
	console.log(`${request.method} request for ${request.url}`); 
	next();
})

app.use(cors());

app.use(express.static("./public"));

app.get('/search=:term', function(request, response){
	var term = request.params.term;
	var params = {q:term};
	T.get('search/tweets', params, function(error, tweets, twitterResponse){
		if(!error){
			response.json(tweets);
		}
	});
});

app.get('/trends', function(request, response){
	var params = {id:23424916};
	T.get('trends/place',params, function(error, trends, twitterResponse){
		if(!error){
			response.json(trends);
		}
	});
})

app.listen(3000);

console.log("Server is running on port 3000");