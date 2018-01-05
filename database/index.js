var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tvShows');

var db = mongoose.connection;

var showSchema = mongoose.Schema({
    name: String,
    genres_ids: Array,
    overview: String,
    poster_path: String,
    vote_average: Number,
    first_air_date: String
});

var TvShow = mongoose.model('TvShow', showSchema);

var addShowToList = (show) => {
    // insert one to collection
    let showToAdd = new TvShow({
        name: show.name,
        genres_ids: show.genres_ids,
        overview: show.overview,
        poster_path: show.poster_path,
        vote_average: show.vote_average,
        first_air_date: show.first_air_date
    });
    TvShow.findOne({'name': show.name}, 'name', (err, sh) => {
        if (sh === null) {
            showToAdd.save((err, show) => {
                if(err) {
                    console.log(`Error adding show to DB ${err}`);
                } else {
                    console.log('Success adding a show to DB');
                }
            })            
        }
    })
};

var findShowsInDB = (callback) => {
    TvShow.find({}, function(err, shows) {
        if (err) {
            console.log(err);
        } else {
            callback(shows);
        }
    })
}

module.exports = {
    addShowToList,
    findShowsInDB
};

