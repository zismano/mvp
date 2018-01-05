var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tvShows');

var db = mongoose.connection;

var showSchema = mongoose.Schema({
	tmdb_id: String,
    title: String,	// name
    overview: String,
    image: String,	// poster_path
    genres: Array,	
   // network: String,
    popularity: Number,	// popularity
  //  seasons: Number,
    yearRelease: Number
});

var TvShow = mongoose.model('TvShow', showSchema);

var tvShow = new TvShow({
	imdb_id: "tt0944947",
	title: "Game of Thrones",
	imgBanner: "http://image.tmdb.org/t/p/w500/hDd5Zd9VMOqBeHa2agbnHZ98WWr.jpg",
    genres: [
        "drama",
        "fantasy",
        "science-fiction",
        "action",
        "adventure"
        ],
    network: "HBO",
    ratingPercentage: "94",
    seasons: 6,
    yearRelease: 2011
});

