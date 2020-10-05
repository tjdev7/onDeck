import React from 'react';
import cardstock1 from './img/cardstock1.JPG';
import cardstock2 from './img/cardstock2.JPG';
import cardstock3 from './img/cardstock3.JPG';
import cardstock4 from './img/cardstock4.JPG';
import cardstock5 from './img/cardstock5.JPG';
import cardstock6 from './img/cardstock6.JPG';
import cardstock7 from './img/cardstock7.JPG';
import cardstock8 from './img/cardstock8.JPG';
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
            <img src={cardstock2} alt="carttest" />
            <i className = "fa fa-thumbs-up"/>
            <i className = "fa fa-thumbs-down"/>
            <i className = "fa fa-thumb-tack"/>
            <i className = "fa fa-times-circle"/>
          </span>
        
          <span className="col">
            <img src={cardstock3} alt="carttest" />
            <i className = "fa fa-thumbs-up"/>
            <i className = "fa fa-thumbs-down"/>
            <i className = "fa fa-thumb-tack"/>
            <i className = "fa fa-times-circle"/>
          </span>
        
          <span className="col">
            <img src={cardstock4} alt="carttest" />
            <i className = "fa fa-thumbs-up"/>
            <i className = "fa fa-thumbs-down"/>
            <i className = "fa fa-thumb-tack"/>
            <i className = "fa fa-times-circle"/>
          </span>
        </div>

        <div className="rowtest1 row">
          <span className="col">
              <img src={cardstock5} alt="carttest" />
              <i className = "fa fa-thumbs-up"/>
              <i className = "fa fa-thumbs-down"/>
              <i className = "fa fa-thumb-tack"/>
              <i className = "fa fa-times-circle"/>
          </span>
          <span className="col">
              <img src={cardstock6} alt="carttest" />
              <i className = "fa fa-thumbs-up"/>
              <i className = "fa fa-thumbs-down"/>
              <i className = "fa fa-thumb-tack"/>
              <i className = "fa fa-times-circle"/>
          </span>
          <span className="col">
              <img src={cardstock7} alt="carttest" />
              <i className = "fa fa-thumbs-up"/>
              <i className = "fa fa-thumbs-down"/>
              <i className = "fa fa-thumb-tack"/>
              <i className = "fa fa-times-circle"/>
          </span>
          <span className="col">
              <img src={cardstock8} alt="carttest" />
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


// let cards = [
//   {
//     id: 1,
//     cardstock1: ,
//     like: ,
//     dislike: ,
//     favorite: ,
//     hide: 
//   },
//   {
//     id: 2,
//     cardstock2: ,
//     like: ,
//     dislike: ,
//     favorite: ,
//     hide: 
//   },
//   {
//     id: 3,
//     cardstock3: ,
//     like: ,
//     dislike: ,
//     favorite: ,
//     hide: 
//   },
//   {
//     id: 4,
//     cardstock4: ,
//     like: ,
//     dislike: ,
//     favorite: ,
//     hide: 
//   },
//   {
//     id: 5,
//     cardstock5: ,
//     like: ,
//     dislike: ,
//     favorite: ,
//     hide: 
//   },
//   {
//     id: 6,
//     cardstock6: ,
//     like: ,
//     dislike: ,
//     favorite: ,
//     hide: 
//   },
//   {
//     id: 7,
//     cardstock7: ,
//     like: ,
//     dislike: ,
//     favorite: ,
//     hide: 
//   },
//   {
//     id: 8,
//     cardstock8: ,
//     like: ,
//     dislike: ,
//     favorite: ,
//     hide: 
//   }
// ]

// const like() {
//   return(

//   );
// }

// const dislike() {
//   return(

//   );
// }

// const favorite() {
//   return(

//   );
// }

// const hide() {
//   return(

//   );
// }


// function CardDisplay() {
//   return (
//     <img src={cardstock1} className="" alt="carttest" />
//   );
// }

export default App;
