import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TickerRow extends Component {
  constructor(props) {
    super(props);
    this.state = { status: null, lastPrice: null }; // Possible values are 'up', 'down' and null.
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevP)
    return { status: }

  }
  

  render() {
    return (
      <div className="row">
        <div className="col name">Ticker</div>
        <div className="col price">Price</div>
        <div className="col time">Time</div>
      </div>
    );
  }
}

TickerRow.propTypes = {
  price: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

export default TickerRow;
