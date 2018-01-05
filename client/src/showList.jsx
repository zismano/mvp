import React from 'react';
import ShowListItem from './showListItem.jsx';

let ShowList = (props) => {
	return (
		<div>
			{props.displayShowList.map(show => 
				<ShowListItem show={show} />
			)}
		</div>
	)
}

export default ShowList;