import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class HoldHeight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.initialHeight || 0,
      windowWidth: 0,
      reset: !(props.resetOnWindowResize === false)
    };
    this.resetHeight = _.debounce(this.resetHeight, 300);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resetHeight.bind(this));
    this.updateHeight();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resetHeight.bind(this));
  }

  resetHeight() {
    if (
      this.state.windowWidth !== window.innerWidth &&
      this.state.reset === true
    ) {
      this.setState({
        height: this.props.initialHeight || 0,
        windowWidth: window.innerWidth
      });
    }
  }

  componentWillReceiveProps(next) {
    if (!_.isEqual(next.children, this.props.children)) {
      this.updateHeight();
    }
  }

  updateHeight() {
    let stateHeight = _.clone(this.state.height);
    const height = this.me.clientHeight;

    if (height > stateHeight) this.setState({ height });
  }

  render() {
    return (
      <div
        ref={me => {
          this.me = me;
        }}
        style={{ minHeight: this.state.height }}
      >
        {this.props.children}
      </div>
    );
  }
}

HoldHeight.propTypes = {
  resetOnWindowResize: PropTypes.bool,
  initialHeight: PropTypes.number
};

export default HoldHeight;
