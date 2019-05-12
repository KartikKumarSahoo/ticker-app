import React from 'react';
import { timeSince } from '../utils';
import PropTypes from 'prop-types';

function TickerTable(props) {
  const { error, data = {}, onStockClick = () => {} } = props;

  // Show error message when connection fails.
  if (error) return <div className="error">{error}</div>;

  // Don't show anything till first message is received.
  if (Object.keys(data).length === 0) return null;

  return (
    <table className="ticker-table-wrapper">
      <thead>
        <tr>
          <th className="name">Ticker</th>
          <th className="price">Price</th>
          <th className="time">Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map(name => {
          const { price, updatedAt, growth } = data[name];
          return (
            <tr className={growth ? '' : 'new'} key={name}>
              <td
                className="name link"
                title="Click to see this stock's history"
                onClick={e => onStockClick(name, e)}
              >
                {name}
              </td>
              <td className={`price ${growth || ''}`}>{price}</td>
              <td className="time">{timeSince(updatedAt)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TickerTable.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.string,
  onStockClick: PropTypes.func.isRequired,
};

export default TickerTable;
