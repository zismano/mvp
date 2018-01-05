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

// var tvShow = new TvShow({
// 	imdb_id: "tt0944947",
// 	title: "Game of Thrones",
// 	imgBanner: "http://image.tmdb.org/t/p/w500/hDd5Zd9VMOqBeHa2agbnHZ98WWr.jpg",
//     genres: [
//         "drama",
//         "fantasy",
//         "science-fiction",
//         "action",
//         "adventure"
//         ],
//     network: "HBO",
//     ratingPercentage: "94",
//     seasons: 6,
//     yearRelease: 2011
// });

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

    showToAdd.save((err, show) => {
        if(err) {
            console.log(`Error adding show to DB ${err}`);
  //          callback(err);
        } else {
            console.log('Success adding a show to DB');
  //          callback(null, show);
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

