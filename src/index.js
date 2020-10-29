import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import img001 from './img/img001.jpg';
import img002 from './img/img002.jpg';
import img003 from './img/img003.jpg';
import img004 from './img/img004.jpg';
import img005 from './img/img005.jpg';
import img006 from './img/img006.jpg';
import img007 from './img/img007.jpg';
import img008 from './img/img008.jpg';
import img009 from './img/img009.jpg';

import Menu from './components/Menu';
import NavBar from './components/NavBar';

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

        <i className = "fa fa-thumbs-up"/>[1500] Liked
        <i className = "fa fa-heart"/>[1,140] Favorites
        <i className = "fa fa-thumb-tack"/>[58,000] Following topic
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
//
// function CardDisplay {
// 	return (

// 	);
// }

// const Header {
// 	return (
// 		<p className="App-Title">
//           onDeck
//         </p>
//         <p className="App-Subtitle">Picture sharing platform</p>
// 	);
// }

// function CardRacks {
// 	return (
		// <div className="container">
//         <div className="rowtest1 row">
//           <span className="col">
//               <img src={cardstock1} alt="carttest" />
//               <h1>title test</h1>
//               // <i className = "fa fa-thumbs-up"/>
//               // <i className = "fa fa-thumbs-down"/>
//               // <i className = "fa fa-thumb-tack"/>
//               // <i className = "fa fa-times-circle"/>
//           </span>

//           <span className ="col">
//             <h1>title test</h1>
//             <img src={cardstock2} alt="carttest" />
            
//             // <i className = "fa fa-thumbs-up"/>
//             // <i className = "fa fa-thumbs-down"/>
//             // <i className = "fa fa-thumb-tack"/>
//             // <i className = "fa fa-times-circle"/>
//           </span>
        
//           <span className="col">
//             <img src={cardstock3} alt="carttest" />
//             <i className = "fa fa-thumbs-up"/>
//             <i className = "fa fa-thumbs-down"/>
//             <i className = "fa fa-thumb-tack"/>
//             <i className = "fa fa-times-circle"/>
//           </span>
        
//           <span className="col">
//             <img src={cardstock4} alt="carttest" />
//             <i className = "fa fa-thumbs-up"/>
//             <i className = "fa fa-thumbs-down"/>
//             <i className = "fa fa-thumb-tack"/>
//             <i className = "fa fa-times-circle"/>
//           </span>
//         </div>

//         <div className="rowtest1 row">
//           <span className="col">
//               <img src={cardstock5} alt="carttest" />
//               <i className = "fa fa-thumbs-up"/>
//               <i className = "fa fa-thumbs-down"/>
//               <i className = "fa fa-thumb-tack"/>
//               <i className = "fa fa-times-circle"/>
//           </span>
//           <span className="col">
//               <img src={cardstock6} alt="carttest" />
//               <i className = "fa fa-thumbs-up"/>
//               <i className = "fa fa-thumbs-down"/>
//               <i className = "fa fa-thumb-tack"/>
//               <i className = "fa fa-times-circle"/>
//           </span>
//           <span className="col">
//               <img src={cardstock7} alt="carttest" />
//               <i className = "fa fa-thumbs-up"/>
//               <i className = "fa fa-thumbs-down"/>
//               <i className = "fa fa-thumb-tack"/>
//               <i className = "fa fa-times-circle"/>
//           </span>
//           <span className="col">
//               <img src={cardstock8} alt="carttest" />
//               <i className = "fa fa-thumbs-up"/>
//               <i className = "fa fa-thumbs-down"/>
//               <i className = "fa fa-thumb-tack"/>
//               <i className = "fa fa-times-circle"/>
//           </span>
//         </div>
//     </div>
//    </div>

// 	);
// }

// ReactDOM.render(
//     <CardDisplay {Header} = CardRacks />
//   document.getElementById('root')
// );

// <Menu />
// <CardDisplay />


