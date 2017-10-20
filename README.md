react-hold-height
=================

React component to hold the highest height established by a child component even though it no longer exists in the browser window.

#### Demos
- [Basic](https://github.com/brurez/react-hold-height/blob/master/examples/basic/index.html)

## Installation
    npm install --save react-hold-height
    
## Overview & Basic Example
`<HoldHeight />` components are mounted with height 0px (unless specified by the initialHeight prop).
As your child component is rendered, `<HoldHeight />` adopts a minimum height (`min-height`) equal to the height of that child component.
If the child component is changed and its height is different, `<HoldHeight />` performs the following logic:
- If new child component height <= last child component height:
`<HoldHeight />` height stays the same.
- If new child component height > last child component height:
`<HoldHeight />` minimum height becomes equal to new child component height.

This behavior is useful in many situations, for example:
- When the child component is being re-render you want to display a loading animation
without the container collapsing making the footer go up causing a bad visual impression.
- When working with pagination, you want the last page containing fewer items
to have the same height as the other pages.

```js
import React, { Component } from 'react';
import HoldHeight from 'react-hold-height';

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
        <HoldHeight>
          {this.renderElements(this.state.page)}
        </HoldHeight>
                
        {this.renderPaginationBtn(this.state.page)}
      </div>
    );
  }
}
```

## `<HoldHeight />` Props
- `resetOnWindowResize` _(boolean)_ _(optional)_: reset `<HoldHeight />` minimum height
to the initial value when the window is resized. Default is _true_.
- `initialHeight` _(number)_ _(optional)_: Initial minimum height in pixels. Default is _0_. 

