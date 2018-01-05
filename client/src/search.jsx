import React from 'react';
import SearchDisplay from './displaySearch.jsx';

var Search = (props) => {
	let showToSearch;
	return (
		<div>
			<div>
				<input type="text" placeholder="TV Show" ref={input => showToSearch = input}></input>	
				<button  className="btn" onClick={(e) => props.searchShow(showToSearch.value)}>Search</button>	
			</div>
			<div>
				{props.displaySearch.map(show => 
					<SearchDisplay show={show} addToList={props.addToList} />
				)}
			</div>
		</div>
	);
}

export default Search;