import React from 'react';

let TopVotedShow = (props) => {
	return (
		<span>
			<img src={`http://image.tmdb.org/t/p/w185//${props.show.poster_path}`}></img>
{/*			<span>{props.show.name}</span>
*/}		</span>
	)
}

export default TopVotedShow;