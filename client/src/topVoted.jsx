import React from 'react';
import TopVotedShow from './topVotedShow.jsx';

let TopVoted = (props) => {
	return (
		<div>
			<a onClick={(e) => props.displayTopVoted()} href="#">Top 25 by rating</a>
			{props.topVotedShows.map(show => 
				<TopVotedShow show={show}/>
			)}
		</div>
	)
}

export default TopVoted;
