import React from 'react';
import cardstock1 from './img/cardstock1.JPG';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-Title">
          onDeck
        </p>
        <p className="App-Subtitle">Picture sharing platform</p>

      </header>
        <div className="rowtest1">
          <img src={cardstock1} className="card-col" alt="carttest" />
          <img src={cardstock1} className="card-col" alt="carttest" />
          <img src={cardstock1} className="card-col" alt="carttest" />
          <img src={cardstock1} className="card-col" alt="carttest" />
        </div>

        <div className="rowtest1">
          <img src={cardstock1} className="card-col" alt="carttest" />
          <img src={cardstock1} className="card-col" alt="carttest" />
          <img src={cardstock1} className="card-col" alt="carttest" />
          <img src={cardstock1} className="card-col" alt="carttest" />
        </div>


    </div>
  );
}

// function CardDisplay() {
//   return (
//     <img src={cardstock1} className="" alt="carttest" />
//   );
// }

export default App;
