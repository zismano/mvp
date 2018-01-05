import React from 'react'

var SearchDisplay = (props) => {
	return (
		<div>
			<div>Search Result</div>
			<div>
				<div>Name: {props.show.name}</div>
				<img src={`http://image.tmdb.org/t/p/w185//${props.show.poster_path}`}></img>
				<div>Overview: {props.show.overview}</div>
				<div>Rating: {props.show.vote_average}</div>
				<button onClick={(e) => props.addToList(props.show)}>Add to List</button>
			</div>	
		</div>
	);	
}

export default SearchDisplay;