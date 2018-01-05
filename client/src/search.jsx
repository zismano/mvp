import React from 'react';
import SearchDisplay from './displaySearch.jsx';

var Search = (props) => {
	let showToSearch;
	return (
		<div>
			<div>
				<input type="text" placeholder="TV Show" ref={input => showToSearch = input}></input>	
				<button onClick={(e) => props.searchShow(showToSearch.value)}>Search</button>	
			</div>
			<div>
				{props.displaySearch.map(show => 
					<SearchDisplay show={show} />
				)}
			</div>
		</div>
	);
}

export default Search;