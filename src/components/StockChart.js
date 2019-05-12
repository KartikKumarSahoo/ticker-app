import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
// import PropTypes from 'prop-types';

class StockChart extends Component {
  constructor(props) {
    super(props);
    this.source = {
      // labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [[5, 9, 7, 8, 5, 3, 5, 4]],
    };
  }

  render() {
    return (
      <div>
        <ChartistGraph
          data={this.source}
          options={{
            showArea: true,
            axisX: {
              showLabel: false,
            },
          }}
          type="Line"
        />
      </div>
    );
  }
}

// StockChart.propTypes = {

// };

export default StockChart;
