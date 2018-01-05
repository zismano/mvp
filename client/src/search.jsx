import React from 'react';

let Search = (props) => {
	let showToSearch;
	return (
		<div>
			<form>
				<input type="text" placeholder="TV Show" ref={input => showToSearch = input}></input>	
				<button onClick={(e) => props.searchShow(showToSearch.value)}>Search</button>	
			</form>
			<div>
				<div>Search Result</div>
				{/*<div>{props.searchResults.name}</div>*/}
			</div>
		</div>
	);
}

export default Search;