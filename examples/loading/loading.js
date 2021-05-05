import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import HoldHeight from '../../src';

const dataToBeLoaded = {
  0: [
    'This is a long list',
    'of items',
    'and takes a lot',
    'of space',
    'when I click "Next Page"',
    'the button the container should',
    'not collapse',
    'making the button remain in the same place'
  ],
  1: ['Not so many items now', 'but its ok. Button stay in the same place']
};

class App extends Component {
  state = { page: 0, data: {} };

  componentDidMount() {
    this.loadPage(0);
  }

  loadPage(pageNumber) {
    setTimeout(
      function() {
        this.setState(prevState => {
          let newState = _.clone(prevState);
          newState.data[pageNumber] = dataToBeLoaded[pageNumber];
          return newState;
        });
      }.bind(this),
      1600
    );
  }

  handlePageChange(pageNumber) {
    this.setState({ page: pageNumber });
    this.loadPage(pageNumber);
  }

  renderElements(pageNumber) {
    const data = this.state.data[pageNumber];

    if (!data) {
      return (
        <div style={{ margin: '1em', textAlign: 'center', padding: '1em' }}>
          <img src="loading.gif" alt="loading" />
        </div>
      );
    }
    const items = data.map((item, key) =>
      <li key={key}>
        {item}
      </li>
    );
    return (
      <ul style={{ margin: '1em' }}>
        {items}
      </ul>
    );
  }

  renderPaginationBtn(pageNumber) {
    if (pageNumber === 0) {
      return (
        <button onClick={() => this.handlePageChange(1)}>Next Page</button>
      );
    }

    if (pageNumber === 1) {
      return (
        <button onClick={() => this.handlePageChange(0)}>Prev. Page</button>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <HoldHeight initialHeight={120} style={{ margin: 16 }}>
          {this.renderElements(this.state.page)}
        </HoldHeight>

        {this.renderPaginationBtn(this.state.page)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
