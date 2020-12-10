import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import 

const Deck = ({
	cell: { img, likes, favorites }
}) => (

	<div className="container">
		<div className="rowtest1 row">
	          <div className="col">
	          	<div className="cardImage">{img}</div>
	          	<div className=""><i className = "fa fa-thumbs-up"/>{likes}</div>
	          	<div className=""><i className = "fa fa-thumb-tack"/>{favorites}</div>
	          </div>
	    </div>
    </div>

);

Deck.propTypes = {
	container: PropTypes.object.isRequired
};

const Deck = ({ }) => (

);

Deck.propTypes = {
	container: PropTypes.array.isRequired
};


let cards = [
  {
    id: 1,
    cardstock1: require('./img/img001.jpg'),
    likes: 14,
    favorites: 3
  },
  {
    id: 2,
    cardstock2: require('./img/img002.jpg'),
    likes: 16,
    favorites: 8
  },
  {
    id: 3,
    cardstock2: require('./img/img003.jpg'),
    likes: 25,
    favorites: 14 
  },
  {
    id: 4,
    cardstock2: require('./img/img004.jpg'),
    likes: 75,
    favorites: 114
  },
  {
    id: 5,
    cardstock2: require('./img/img005.jpg'),
    likes: 10,
    favorites: 15
  },
  {
    id: 6,
    cardstock2: require('./img/img006.jpg'),
    likes: 45,
    favorites: 40
  },
  {
    id: 7,
    cardstock2: require('./img/img007.jpg'),
    likes: 20,
    favorites: 34
  },
  {
    id: 8,
    cardstock2: require('./img/img008.jpg'),
    likes: 200,
    favorites: 130
  },
  {
    id: 9,
    cardstock2: require('./img/img009.jpg'),
    likes: 423,
    favorites: 202
  },
  {
    id: 10,
    cardstock2: require('./img/img010.jpg'),
    likes: 70,
    favorites: 30
  },
  {
    id: 11,
    cardstock2: require('./img/img011.jpg'),
    likes: 70,
    favorites: 10
  },
  {
    id: 12,
    cardstock2: require('./img/img012.jpg'),
    likes: 196,
    favorites: 82
  },
  {
    id: 13,
    cardstock2: require('./img/img013.jpg'),
    likes: 125,
    favorites: 234
  },
  {
    id: 14,
    cardstock2: require('./img/img014.jpg'),
    likes: 458,
    favorites: 234
  },
  {
    id: 15,
    cardstock2: require('./img/img015.jpg'),
    likes: 109,
    favorites: 73
  },
  {
    id: 16,
    cardstock2: require('./img/img016.jpg'),
    likes: 307,
    favorites: 459
  },
  {
    id: 17,
    cardstock2: require('./img/img017.jpg'),
    likes: 87,
    favorites: 96
  },
  {
    id: 18,
    cardstock2: require('./img/img018.jpg'),
    likes: 915,
    favorites: 1034
  },
  {
    id: 19,
    cardstock2: require('./img/img019.jpg'),
    likes: 783,
    favorites: 531
  },
  {
    id: 20,
    cardstock2: require('./img/img020.jpg'),
    likes: 456,
    favorites: 594
  }
];

export default Deck;