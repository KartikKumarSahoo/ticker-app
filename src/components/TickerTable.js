import React, { Component } from 'react';
import { STOCKS_WS_URL } from '../constants';
import { timeSince } from '../utils';

class TickerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.initWebSocket();
  }

  initWebSocket = () => {
    if (!('WebSocket' in window)) return;

    const socket = new WebSocket(STOCKS_WS_URL);

    // Connection opened
    socket.addEventListener('open', event => {
      socket.send('Hello Server!');
    });

    // Listen for messages
    socket.addEventListener('message', event => {
      // console.log('Message from server ', event.data);
      JSON.parse(event.data).forEach(data => {
        let [name, price] = data;
        price = price.toFixed(2);
        const { price: oldPrice } = this.state[name] || {};

        this.setState({
          [name]: {
            price: +price,
            updatedAt: Date.now(),
            growth: oldPrice ? (oldPrice > price ? 'down' : 'up') : null,
          },
        });
      });
    });
  };

  render() {
    // console.log(this.state);
    if (Object.keys(this.state).length === 0) return null;

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
          {Object.keys(this.state).map(name => {
            const { price, updatedAt, growth } = this.state[name];
            return (
              <tr className={growth ? '' : 'new'} key={name}>
                <td className="name">{name}</td>
                <td className={`price ${growth || ''}`}>{price}</td>
                <td className="time">{timeSince(updatedAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

TickerTable.propTypes = {};

export default TickerTable;
