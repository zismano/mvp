var request = require('request');
var tmdbKey = require('../API_keys/config_key.js');

let searchShow = (showToSearch) => {
	let options = {
		url: `https://api.themoviedb.org/3/search/tv?api_key=${tmdbKey.api_key}&language=en-US&query=${showToSearch}&page=1`
	}
	
	request(options,(err, response, body) => {
		if(err) { console.log(err); return; }
  		console.log("Body", body);
	});
}


module.exports = {
	searchShow
}