
var request = require('request');
var rp = require('request-promise');
var tmdbKey = require('../API_keys/config_key.js');

let searchShow = (showToSearch, callback) => {
	// let options = {
	// 	url: `https://api.themoviedb.org/3/search/tv?api_key=${tmdbKey.api_key}&language=en-US&query=${showToSearch}&page=1`
	// }
	
	// request(options,(err, response, body) => {
	// 	if(err) { console.log(err); return; }
	// 	body = JSON.parse(body);
 //  		callback(body.results[0]);
	// });
	var options = {
    	url: `https://api.themoviedb.org/3/search/tv?api_key=${tmdbKey.api_key}&language=en-US&query=${showToSearch}&page=1`,
    	headers: {
        	'User-Agent': 'Request-Promise'
    	},
    	json: true // Automatically parses the JSON string in the response
	}

    return rp(options);
};
 



module.exports = {
	searchShow
}


// var options = {
//     uri: `https://api.themoviedb.org/3/search/tv?api_key=${tmdbKey.api_key}&language=en-US&query=${showToSearch}&page=1`,
//     headers: {
//         'User-Agent': 'Request-Promise'
//     },
//     json: true // Automatically parses the JSON string in the response
// };
 
// rp(options)
//     .then(function (repos) {
//         console.log('User has %d repos', repos.length);
//     })
//     .catch(function (err) {
//         // API call failed...
//     });