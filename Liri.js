

var keys = require('./keys.js');
var fs = require('fs');
var twitter = require('twitter');
var spotify = require('node-spotify-api');

function myTweets() {
	var client = new twitter(keys.twitterKeys);

	var params = {screen_name: 'WillyHunka', count:20};

	client.get('stuatuses/user_timeline', params, function(error, tweets, response)  {
		if(!error) {
			var data= []; //holds data
			console.log("Recent Tweets");
			for(var i=0; i<tweets.length; i++){
				console.log('Created at: ' + tweets[i].created_at);
				console.log(tweets[i].text);
			};
		}

	}

)};

function spotifyCall() {

	var spotify = new Spotify(keys.spotifyKeys);
	
	if(value!= false){

	spotify.search({type: 'track', query: value + '&limit=1&'

}, function(error, data) {
	if (err) {
		return console.log('Error occured:', err);
		}
		console.log("The Artist for this song is: " + data.tracks.items[0].artist[0].name);
		console.log("Song Name: " + data.tracks.items[0].name);
		console.log(console.log("Preview URL: " + data.tracks.items[0].preview_url);
		console.log("Album Name: "+data.tracks.items[0].album.name);
		});
	}
}

