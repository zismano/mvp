import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    };

    this.searchShow = this.searchShow.bind(this);
  }

  searchShow(showToSearch) {
  	$.ajax({
  		url: '/shows',
  		type: "GET",
  		// data: {title: showToSearch},
   //   contentType: 'application/json',
  		success: (show) => {
  			console.log('success', show);
        console.log(show);
  		},
  		error: (err) => {
        console.log(JSON.stringify(err));

        console.log('ERROR');
  			console.log(err);
  		}
  	})
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
			<Search searchShow={this.searchShow} searchResults={this.state.searched} />
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