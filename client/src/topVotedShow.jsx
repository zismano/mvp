import React from 'react';

let TopVotedShow = (props) => {
	return (
		<div>
			<img src={`http://image.tmdb.org/t/p/w185//${props.show.poster_path}`}></img>
			<div>{props.show.name}</div>
		</div>
	)
}

export default TopVotedShow;