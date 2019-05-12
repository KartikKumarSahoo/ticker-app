import React from 'react';
import TickerTable from './components/TickerTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <bold>Ticker App</bold>
      </header>
      <main>
        <TickerTable />
      </main>
    </div>
  );
}

export default App;
