import React from 'react';
import ShowListItem from './showListItem.jsx';

let ShowList = (props) => {
	return (
		<span>
			{props.displayShowList.map(show => 
				<ShowListItem show={show} />
			)}
		</span>
	)
}

export default ShowList;