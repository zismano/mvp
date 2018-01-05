import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Search from './search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    }

    this.searchShow = this.searchShow.bind(this);
  }

  searchShow(showToSearch) {
  	$.ajax({
  		url: '/shows',
  		type: "GET",
  		data: {title: showToSearch},
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
			<Search searchShow={this.searchShow} />
		<div>
			<a href="">Top 25 by popularity</a>	
		</div>
		<form>
			Pick a genre

		</form>
		</div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));