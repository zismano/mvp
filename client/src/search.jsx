import React from 'react';

let Search = (props) => {
	let showToSearch;
	return (
		<div>
			<form>
				<input type="text" placeholder="TV Show" ref={input => showToSearch = input}></input>	
				<button onClick={(e) => props.searchShow(showToSearch)}>Search</button>	
			</form>
		</div>
	);
}

export default Search;