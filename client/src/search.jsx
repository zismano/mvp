import React from 'react';

var Search = (props) => {
	let showToSearch;
	return (
		<div>
			<div>
				<input type="text" placeholder="TV Show" ref={input => showToSearch = input}></input>	
				<button onClick={(e) => props.searchShow(showToSearch.value)}>Search</button>	
			</div>
			<div>
				<div>Search Result</div>
				{/*<div>{props.searchResults.name}</div>*/}
			</div>
		</div>
	);
}

export default Search;