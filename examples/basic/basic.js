import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HoldHeight from '../../src';

class App extends Component {
  state = { page: 0 };

  renderElements(pageNumber) {
    if (pageNumber === 0) {
      return (
        <ul>
          <li>This is a long list</li>
          <li>of items</li>
          <li>and takes a lot</li>
          <li>of space</li>
          <li>when I click "Next Page"</li>
          <li>the button the container should</li>
          <li>not collapse</li>
          <li>making the button remain in the same place</li>
        </ul>
      );
    }

    if (pageNumber === 1) {
      return (
        <ul>
          <li>Not so many items now</li>
          <li>but its ok. Button stay in the same place</li>
        </ul>
      );
    }
  }

  renderPaginationBtn(pageNumber) {
    if (pageNumber === 0) {
      return (
        <button onClick={() => this.setState({ page: 1 })}>Next Page</button>
      );
    }

    if (pageNumber === 1) {
      return (
        <button onClick={() => this.setState({ page: 0 })}>Prev. Page</button>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <HoldHeight style={{ margin: 16 }}>
          {this.renderElements(this.state.page)}
        </HoldHeight>

        {this.renderPaginationBtn(this.state.page)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
