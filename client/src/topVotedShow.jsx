import React from 'react';

let TopVotedShow = (props) => {
	return (
		<span>
			<img src={`http://image.tmdb.org/t/p/w185//${props.show.poster_path}`}
			onClick={(e) => props.addToList(props.show)}
			></img>
		</span>
	)
}

export default TopVotedShow;