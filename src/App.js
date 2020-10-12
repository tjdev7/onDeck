import React from 'react';
import cardstock6 from './img/cardstock6.JPG';
import cardstock7 from './img/cardstock7.JPG';
import cardstock8 from './img/cardstock8.JPG';
import img001 from './img/img001.jpg';
import img002 from './img/img002.jpg';
import img003 from './img/img003.jpg';
import img004 from './img/img004.jpg';
import img005 from './img/img005.jpg';
import img006 from './img/img006.jpg';
import img007 from './img/img007.jpg';
import img008 from './img/img008.jpg';
import img009 from './img/img009.jpg';
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
      <h1>Engineering Inspiration</h1>
      <main>
        <i className = "fa fa-heart-tack"/>Stacks
        <i className = "fa fa-heart-tack"/>Liked
        <i className = "fa fa-thumb-tack"/>Favorites
        <i className = "fa fa-thumb-tack"/>Following topic

      </main>

      <div className="container">
        <div className="rowtest1 row">
          <span className="col">
              <img className="cardImage" src={img001} alt="Card-render-01" />
          </span>

          <span className ="col">
            <img className="cardImage" src={img002} alt="Card-render-02" />
          </span>
        
          <span className="col">
            <img className="cardImage" src={img003} alt="Card-render-03" />
          </span>
          <span className="col">
            <img className="cardImage" src={img004} alt="Card-render-04" />
          </span>

        </div>

        <div className="rowtest1 row">
          <span className="col">
              <img className="cardImage"  src={img005} alt="Card-render-05" />
          </span>
          <span className="col">
              <img className="cardImage"  src={img006} alt="Card-render-06" />
          </span>
          <span className="col">
              <img className="cardImage" src={img007} alt="Card-render-07" />
          </span>
          <span className="col">
              <img className="cardImage" src={img008} alt="Card-render-08" />
          </span>
        </div>
        <div className="rowtest1 row">
          <span className="col">

              <img className="cardImage" src={img009} alt="Card-render-09" />

          </span>
          <span className="col">

              <img className="cardImage" src={cardstock6} alt="Card-render-10" />
          </span>
          <span className="col">
              <img className="cardImage" src={cardstock7} alt="Card-render-11" />
          </span>
          <span className="col">
              <img className="cardImage" src={cardstock8} alt="Card-render-12" />
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