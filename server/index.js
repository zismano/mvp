var express = require('express');
var app = express();

var bodyParser = require('body-parser')

//app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.post('/shows', function(req, res) {

});

app.get('/shows', function(req, res) {

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))