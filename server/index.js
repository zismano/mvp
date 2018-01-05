var express = require('express');
var app = express();

var path = require('path');

var bodyParser = require('body-parser');

const tmdb = require('../helpers/tmdb.js');

const db = require('../database/index.js');

//app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.post('/show', function(req, res) {
	console.log(req.body);
	db.addShowToList(req.body);
});

app.get('/search', (req, res) => {
		// user searches for tv show
	// connects to API with user search
	// displays result on screen

	tmdb.searchShow(req.query.title, show =>  {
		res.send(show);
	})

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

