import React from 'react';

let ShowListItem = (props) => {
	return (
		<span>
			<img src={`http://image.tmdb.org/t/p/w185//${props.show.poster_path}`}></img>
		</span>
	)	
}

export default ShowListItem;