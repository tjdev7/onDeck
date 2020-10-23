import React from 'react';
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

      </header>
      <span className="subdesc">
        <h1 className="StackTopic">Engineering Inspiration</h1>
        <h2 className="">Topic description</h2>
        <h4 className="StackDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lacus, commodo sed volutpat nec, blandit malesuada elit. Mauris congue nec eros nec volutpat. Sed sit amet congue elit. Ut efficitur orci arcu, sit amet imperdiet turpis iaculis ut. Phasellus feugiat arcu metus, eu viverra felis cursus vitae.</h4>
      </span>
      <main className="">
        <i className = "fa fa-thumb-tack"/>[0] Stacks
        <i className = "fa fa-thumbs-up"/>[1500] Liked
        <i className = "fa fa-heart"/>[1.14k.] Favorites
        <i className = "fa fa-thumb-tack"/>[0] Following topic
      </main>

      <div className="container">
        <div className="rowtest1 row">
          <span className="col">
              <img className="cardImage" src={img001} alt="Card-render-01" />
                <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>

          <span className ="col">
            <img className="cardImage" src={img002} alt="Card-render-02" />
            <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
        
          <span className="col">
            <img className="cardImage" src={img003} alt="Card-render-03" />
            <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
          <span className="col">
            <img className="cardImage" src={img004} alt="Card-render-04" />
            <aside> 
                 <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
          <span className="col">
            <img className="cardImage" src={img004} alt="Card-render-04" />
            <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>

        </div>

        <div className="rowtest1 row">
          <span className="col">
              <img className="cardImage"  src={img005} alt="Card-render-05" />
              <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage"  src={img006} alt="Card-render-06" />
              <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage" src={img007} alt="Card-render-07" />
              <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage" src={img008} alt="Card-render-08" />
              <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
          <span className="col">
            <img className="cardImage" src={img004} alt="Card-render-04" />
            <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
        </div>
        <div className="rowtest1 row">
          <span className="col">
              <img className="cardImage" src={img009} alt="Card-render-09" />
              <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage" src={img004} alt="Card-render-10" />
              <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage" src={img004} alt="Card-render-11" />
              <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage" src={img004} alt="Card-render-12" />
              <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
          <span className="col">
            <img className="cardImage" src={img004} alt="Card-render-04" />
            <aside> 
                  <span><a href="starrt.com"> 
                  0 <i className = "fa fa-thumbs-up"/>
                  </a>
                  </span>
                  <span><a href="starrt.com">
                  0 <i className = "fa fa-thumb-tack"/>
                  </a>
                  </span>
                  <span> <a href="starrt.com">
                  0 <i className = "fa fa-share-square"/>
                  </a>
                  </span>
                </aside>
          </span>
        </div>
    </div>
    </div>
  );
}


// var TopicBar = {
//   Stacks: 15,
//   Liked: 1500,
//   Favorites: 1.14k,
//   Following: 34
// }



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