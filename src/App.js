import React from 'react';
import TickerTable from './components/TickerTable';
import StockChart from './components/StockChart';
import { STOCKS_WS_URL, ERROR_MESSAGE } from './constants';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liveStocks: {},
      activeStock: null,
      error: null,
    };
    this.data = {}; // To keep all historical data.

    this.initWebSocket();
  }

  showChart = (stock, e) => {
    e.stopPropagation();
    this.setState({ activeStock: stock });
  };

  closeChart = e => {
    e.stopPropagation();
    this.setState({ activeStock: null });
  };

  initWebSocket = () => {
    if (!('WebSocket' in window)) return;

    try {
      const socket = new WebSocket(STOCKS_WS_URL);
      // Connection opened
      socket.addEventListener('open', () => {
        socket.send('Hello Server!');
      });

      // Handle socket connection error
      socket.addEventListener('error', () => {
        this.setState({ error: ERROR_MESSAGE });
      });

      // Listen for messages
      socket.addEventListener('message', event => {
        // console.log('Message from server ', event.data);
        JSON.parse(event.data).forEach(data => {
          let [name, price] = data;
          price = price.toFixed(2);
          const { price: oldPrice } = this.state.liveStocks[name] || {};
          const time = Date.now();

          // Store data for future use.
          this.data[name] = this.data[name] || {};
          this.data[name][time] = price;

          // Update state to show in the Stocks Table
          this.setState({
            liveStocks: {
              ...this.state.liveStocks,
              [name]: {
                price: +price,
                updatedAt: time,
                growth: oldPrice ? (oldPrice > price ? 'down' : 'up') : null,
              },
            },
          });
        });
      });
    } catch (err) {
      console.error('Error', err);
      this.setState({ error: ERROR_MESSAGE });
    }
  };

  render() {
    const { liveStocks = {}, error, activeStock } = this.state || {};
    return (
      <div className="App">
        <header className="App-header">
          <h1>Live Stocks App</h1>
        </header>
        <main>
          <TickerTable
            data={liveStocks}
            error={error}
            onStockClick={this.showChart}
          />
          {activeStock && (
            <StockChart
              values={this.data[activeStock]}
              stockName={activeStock}
              onClose={this.closeChart}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
