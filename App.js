import React, { Component } from 'react';
import logo from './example/src/logo.svg';
import './example/src/App.css';

import HoldHeight from 'react-hold-height';

class App extends Component {
  state = { page: 0 };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <HoldHeight resetOnWindowResize={true}>
          {this.state.page === 0 &&
            <ul>
              <li>This is a long list</li>
              <li>of items</li>
              <li>and take a lot</li>
              <li>of space</li>
              <li>when I click "Next Page"</li>
              <li>the button the container should</li>
              <li>not collapse</li>
              <li>making the button remain in the same place</li>
            </ul>}
          {this.state.page === 1 &&
            <ul>
              <li>Not so many items now</li>
              <li>but its ok. Button stay in the same place</li>
            </ul>}
        </HoldHeight>
        {this.state.page === 0 &&
          <button onClick={() => this.setState({ page: 1 })}>Next Page</button>}
        {this.state.page === 1 &&
          <button onClick={() => this.setState({ page: 0 })}>
            Prev. Page
          </button>}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
