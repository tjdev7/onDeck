import React from 'react';
import cardstock1 from './img/cardstock1.JPG';
import './App.css';
import './bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-Title">
          onDeck
        </p>
        <p className="App-Subtitle">Picture sharing platform</p>

      </header>
      <div className="container">
        <div className="rowtest1 row">
          <span className="col">
              <img src={cardstock1} alt="carttest" />
              <i className = "fa fa-thumbs-up"/>
              <i className = "fa fa-thumbs-down"/>
              <i className = "fa fa-thumb-tack"/>
              <i className = "fa fa-times-circle"/>
          </span>

          <span className ="col">
            <img src={cardstock1} alt="carttest" />
            <i className = "fa fa-thumbs-up"/>
            <i className = "fa fa-thumbs-down"/>
            <i className = "fa fa-thumb-tack"/>
            <i className = "fa fa-times-circle"/>
          </span>
        
          <span className="col">
            <img src={cardstock1} alt="carttest" />
            <i className = "fa fa-thumbs-up"/>
            <i className = "fa fa-thumbs-down"/>
            <i className = "fa fa-thumb-tack"/>
            <i className = "fa fa-times-circle"/>
          </span>
        
          <span className="col">
            <img src={cardstock1} alt="carttest" />
            <i className = "fa fa-thumbs-up"/>
            <i className = "fa fa-thumbs-down"/>
            <i className = "fa fa-thumb-tack"/>
            <i className = "fa fa-times-circle"/>
          </span>
        </div>

        <div className="rowtest1 row">
          <span className="col">
              <img src={cardstock1} alt="carttest" />
              <i className = "fa fa-thumbs-up"/>
              <i className = "fa fa-thumbs-down"/>
              <i className = "fa fa-thumb-tack"/>
              <i className = "fa fa-times-circle"/>
          </span>
          <span className="col">
              <img src={cardstock1} alt="carttest" />
              <i className = "fa fa-thumbs-up"/>
              <i className = "fa fa-thumbs-down"/>
              <i className = "fa fa-thumb-tack"/>
              <i className = "fa fa-times-circle"/>
          </span>
          <span className="col">
              <img src={cardstock1} alt="carttest" />
              <i className = "fa fa-thumbs-up"/>
              <i className = "fa fa-thumbs-down"/>
              <i className = "fa fa-thumb-tack"/>
              <i className = "fa fa-times-circle"/>
          </span>
          <span className="col">
              <img src={cardstock1} alt="carttest" />
              <i className = "fa fa-thumbs-up"/>
              <i className = "fa fa-thumbs-down"/>
              <i className = "fa fa-thumb-tack"/>
              <i className = "fa fa-times-circle"/>
          </span>
        </div>
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
