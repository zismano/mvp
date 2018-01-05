var express = require('express');
var app = express();

var path = require('path');

var bodyParser = require('body-parser');

const tmdb = require('../helpers/tmdb.js');

const db = require('../database/index.js');

// parse application/json
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.post('/shows', function(req, res) {
	console.log(req.body);
	db.addShowToList(req.body);
	res.end();
});

app.get('/shows', function(req, res) {
	db.findShowsInDB(shows => {
		console.log(`Shows in list:${shows}`);
		res.send(shows);
	});
})

app.get('/search', (req, res) => {
		// user searches for tv show
	// connects to API with user search
	// displays result on screen

	tmdb.searchShow(req.query.title, (show) =>  {
		res.send(show);
	})
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))

