import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User'

class App extends React.Component {

  state = {
    user: {},
    followers: []
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/dmnqgrrtt')
      .then(response => {
        console.log('user', response);
        this.setState({
          user: response.data,
        })
      })
    axios
      .get('https://api.github.com/users/dmnqgrrtt/followers')
      .then(response => {
        console.log('followers', response);
        this.setState({
            followers: response.data
        })
    })
      
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='heading'>
            <h1>Github User</h1>
          </div>         
        </header>
        <User user={this.state.user} followers={this.state.followers} />
        
      </div>
    );
  }
  
}

export default App;
