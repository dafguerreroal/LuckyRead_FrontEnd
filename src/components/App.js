import React, { Component } from 'react';
import ListsContainer from './ListsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Hiplyst!</h1>
        </header>
        <ListsContainer />
      </div>
    );
  }
}

export default App;