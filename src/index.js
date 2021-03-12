import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img001 from './img/img001.jpg';
import img002 from './img/img002.jpg';
import img003 from './img/img003.jpg';
import img004 from './img/img004.jpg';
import img005 from './img/img005.jpg';
import img006 from './img/img006.jpg';
import img007 from './img/img007.jpg';
import img008 from './img/img008.jpg';
import img009 from './img/img009.jpg';
import img010 from './img/img010.jpg';
import img011 from './img/img011.jpg';
import img012 from './img/img012.jpg';
import img013 from './img/img013.jpg';
import img014 from './img/img014.jpg';
import img015 from './img/img015.jpg';
import img016 from './img/img016.jpg';
import img017 from './img/img017.jpg';
import img018 from './img/img018.jpg';
import img019 from './img/img019.jpg';
import img020 from './img/img020.jpg';



// import Menu from './components/Menu';
// import NavBar from './components/NavBar';
// import CardsDisplay from './components/CardsDisplay';

import './App.css';
import './bootstrap.css';

function App() {
// const toggle {}
// {like} + 1 ? {like} -1
//
  return (
    // <NavBar />
    // <Menu />
    <div className="App">
      <header className="App-header">
        <p className="App-Title">
          onDeck
        </p>

      </header>
      <span className="subdesc">
        <h1 className="StackTopic">Engineering Inspiration</h1>
        <h4 className="StackDesc">General images for about mechanics, engineering, technology and science.</h4>


      </span>
      <main className="">

        <i className = "fa fa-thumbs-up"/>1500 Liked
        <i className = "fa fa-heart"/>1,140 Favorites
        <i className = "fa fa-thumb-tack"/>58000 Following topic
      </main>

      <div className="container">
        <div className="row">
          <span className="col">
              <img className="cardImage" src={img001} alt="Card-render-01" />
                <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>456
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>594
                  </span>
                </aside>
          </span>

          <span className ="col">
            <img className="cardImage" src={img002} alt="Card-render-02" />
            <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>14
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>3
                  </span>
                </aside>
          </span>
        
          <span className="col">
            <img className="cardImage" src={img003} alt="Card-render-03" />
            <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>16 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>8 
                  </span>
                </aside>
          </span>
          <span className="col">
            <img className="cardImage" src={img004} alt="Card-render-04" />
            <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>25 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>14 
                  </span>
                </aside>
          </span>
          <span className="col">
            <img className="cardImage" src={img005} alt="Card-render-04" />
            <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>75 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>114 
                  </span>
                </aside>
          </span>

        </div>

        <div className="row">
          <span className="col">
              <img className="cardImage"  src={img006} alt="Card-render-05" />
              <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>10 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>15 
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage"  src={img007} alt="Card-render-06" />
              <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>45 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>40 
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage" src={img008} alt="Card-render-07" />
              <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>20 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>34 
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage" src={img009} alt="Card-render-08" />
              <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>200 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>130 
                  </span>
                </aside>
          </span>
          <span className="col">
            <img className="cardImage" src={img010} alt="Card-render-04" />
            <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>423 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>202 
                  </span>
                </aside>
          </span>
        </div>
        <div className="row">
          <span className="col">
              <img className="cardImage" src={img011} alt="Card-render-09" />
              <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>70 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>30 
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage" src={img012} alt="Card-render-10" />
              <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>70 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>10 
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage" src={img013} alt="Card-render-11" />
              <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>196 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>82 
                  </span>
                </aside>
          </span>
          <span className="col">
              <img className="cardImage" src={img014} alt="Card-render-12" />
              <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>125 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>234 
                  </span>
                </aside>
          </span>
          <span className="col">
            <img className="cardImage" src={img015} alt="Card-render-04" />
            <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>458 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>243 
                  </span>
                </aside>
          </span>
        </div>

        <div className="row">
          <span className="col">
              <img className="cardImage" src={img016} alt="Card-render-01" />
                <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>109 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>73 
                  </span>
                </aside>
          </span>
          <span className ="col">
            <img className="cardImage" src={img017} alt="Card-render-02" />
            <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>307 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>459 
                  </span>
                </aside>
          </span>
          <span className="col">
            <img className="cardImage" src={img018} alt="Card-render-03" />
            <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>87 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>96 
                  </span>
                </aside>
          </span>
          <span className="col">
            <img className="cardImage" src={img019} alt="Card-render-04" />
            <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>915 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>1034 
                  </span>
                </aside>
          </span>
          <span className="col">
            <img className="cardImage" src={img020} alt="Card-render-04" />
            <aside> 
                  <span> 
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumbs-up"/></button>783 
                  </span>
                  <span>
                  <button className="Media-Btn-NonPadding"><i className = "fa fa-thumb-tack"/></button>531 
                  </span>
                </aside>
          </span>
        </div>
    </div>
    </div>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




