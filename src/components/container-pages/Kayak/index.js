import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    axios
      .get('/users')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {/* {this.state.users.map(user => (
          <div key={user.id}>{user.username}</div>
        ))} */}
      </div>
    );
  }
}

export default App;
