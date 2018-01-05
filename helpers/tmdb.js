
var request = require('request');
var rp = require('request-promise');
var tmdbKey = require('../API_keys/config_key.js');

let searchShow = (showToSearch, callback) => {
	let options = {
		url: `https://api.themoviedb.org/3/search/tv?api_key=${tmdbKey.api_key}&language=en-US&query=${showToSearch}&page=1`
	}
	
	request(options,(err, response, body) => {
		if(err) { console.log(err); return; }
		body = JSON.parse(body);
  		callback(body.results[0]);
	});
};

let getTopVoted = (callback) => {
	let options = {
		url: `https://api.themoviedb.org/3/discover/tv?api_key=${tmdbKey.api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`
	}
	
	request(options,(err, response, body) => {
		if(err) { console.log(err); return; }
		body = JSON.parse(body);
  		callback(body.results);
	});
}

module.exports = {
	searchShow,
	getTopVoted
}