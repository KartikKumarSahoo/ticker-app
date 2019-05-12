import React from 'react';
import TickerTable from './components/TickerTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Live Stock Ticker App</h1>
      </header>
      <main>
        <TickerTable />
      </main>
    </div>
  );
}

export default App;
