import React from 'react';
import ChartistGraph from 'react-chartist';
import PropTypes from 'prop-types';

function StockChart(props) {
  const { values, stockName, onClose } = props;
  if (!values) return null;

  const prices = Object.values(values);
  const chartData = { series: [prices] };
  const initialValue = prices[0] || 0;
  const finalValue = prices[prices.length - 1] || 0;
  // console.log(initialValue, finalValue);

  return (
    <div
      className={`sparkline-chart ${
        finalValue > initialValue ? 'upward' : 'downward'
      }`}
    >
      <h2>
        History of <span className="stock-name">{stockName}</span> Stock
      </h2>
      <span className="close" onClick={onClose}>
        &#10539;
      </span>
      <ChartistGraph
        data={chartData}
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

StockChart.propTypes = {
  values: PropTypes.object.isRequired,
  stockName: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default StockChart;
