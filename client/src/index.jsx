import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    };
  }

  render() {
    return (
    	<div>
   		<h1>Welcome to My TV-Show List</h1>
		<div>
			<h2>My TV-Show list</h2>
			<li>Game of thrones</li>
			<li>Game of thrones</li>
			<li>Game of thrones</li>
			<li>Game of thrones</li>
			<li>Game of thrones</li>
		</div>
		<form>
			<input type="text" placeholder="TV Show"></input>	
			<button>Search</button>	
		</form>
		<div>
			<a href="">Top 25 by popularity</a>	
		</div>
		<form>
			Pick a genre
			<select name="text"> {/*<!--Supplement an id here instead of using 'text'-->*/}
	  			<option value="value1">Action</option> 
	  			<option value="value2" selected>Horror</option>
	  			<option value="value3">Mystery</option>
			</select>
		</form>
		</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));