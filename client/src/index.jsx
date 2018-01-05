import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Search from './search.jsx';
import ShowList from './showList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      search: []
    }

    this.searchShow = this.searchShow.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  searchShow(showToSearch) {
  	$.ajax({
  		url: '/search',
  		type: "GET",
  		data: {title: showToSearch},
      contentType: "application/json",
  		success: (show) => {
  			console.log('success', show);
        let search = [show];
        console.log(search);
        console.log(this);
        this.setState({
          search: [show]
        })
  		},
  		error: (err) => {
  			console.log(err);
  		}
  	})
  }

  addToList(show) {
    this.setState({
      search: []
    });
    $.ajax({
      url: '/shows',
      type: "POST",
      data: JSON.stringify(show),
      contentType: "application/json",
      success: (message) => {
        //get request with all shows from db
        console.log(`Success ${message}`);
        this.displayShowList();
      },
      error: (err) => {
        console.log(`Error ${err}`);
      }
    })
  }

  displayShowList() {
    $.ajax({
      url: '/shows',
      type: "GET",
      success: (shows) => {
        console.log(`Success ${shows}`);
        console.dir(shows);
        this.setState({
          shows: shows
        })
      },
      error: (err) => {
        console.log(`Error ${err}`);
      }
    })
  }

  render() {
    return (
    	<div>
   		 <h1>Welcome to My TV-Show List</h1>
  		<div>
  			<h2>My TV-Show list</h2>
        <ShowList displayShowList={this.state.shows}/>
{/*  			<li>Game of thrones</li>
  			<li>Game of thrones</li>
  			<li>Game of thrones</li>
  			<li>Game of thrones</li>
  			<li>Game of thrones</li>*/}
  		</div>
			<Search 
        searchShow={this.searchShow} 
        displaySearch={this.state.search} 
        addToList={this.addToList}/>
		</div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));