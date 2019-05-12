import React from 'react';
import TickerTable from './components/TickerTable';
import StockChart from './components/StockChart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Live Stock Ticker App</h1>
      </header>
      <main>
        <TickerTable />
        <StockChart />
      </main>
    </div>
  );
}

export default App;
