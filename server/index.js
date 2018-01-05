var express = require('express');
var app = express();

var path = require('path');

var bodyParser = require('body-parser');

const tmdb = require("../helpers/tmdb.js");

//app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

// app.post('/show', function(req, res) {

// });

app.get('/shows', (req, res) => {
		// user searches for tv show
	// connects to API with user search
	// displays result on screen
res.send(JSON.stringify({title: 'nana'}));

//	tmdb.searchShow(req.query.title)
// tmdb.searchShow('BREAK')
// 	.then(body => {
// 	//     body = JSON.parse(body);
// 	//     res.send(body.results[0]);
// 	console.log(body);
// 	res.send(body);
//     })
//     .catch(function (err) {
//         // API call failed...
//         console.log('fails connecting to API');
//     });;
// 		console.log('show is', show);
// 	//	res.status(200);
// 		res.send(show);
			
// //		}
// 	//	res.send(show);
// 	});

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

//	tmdb.searchShow("Breaking");


