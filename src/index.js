import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import './bootstrap.css';
import * as serviceWorker from './serviceWorker';




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

serviceWorker.unregister();
