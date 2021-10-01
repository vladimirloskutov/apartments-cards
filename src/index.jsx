import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers';

const entities = [
  {
    id: 1, imageUrl: 'url', title: 'title1', description: 'description1', price: 1000000, likesCount: 6, isLiked: true,
  },
  {
    id: 2, imageUrl: 'url', title: 'title2', description: 'description2', price: 2000000, likesCount: 2, isLiked: false,
  },
  {
    id: 3, imageUrl: 'url', title: 'title3', description: 'description3', price: 3000000, likesCount: 0, isLiked: false,
  },
  {
    id: 4, imageUrl: 'url', title: 'title4', description: 'description4', price: 4000000, likesCount: 3, isLiked: true,
  },
  {
    id: 5, imageUrl: 'url', title: 'title5', description: 'description5', price: 5000000, likesCount: 1, isLiked: true,
  },
  {
    id: 6, imageUrl: 'url', title: 'title6', description: 'description6', price: 6000000, likesCount: 4, isLiked: false,
  },
  {
    id: 7, imageUrl: 'url', title: 'title7', description: 'description7', price: 7000000, likesCount: 13, isLiked: true,
  },
  {
    id: 8, imageUrl: 'url', title: 'title8', description: 'description8', price: 8000000, likesCount: 0, isLiked: false,
  },
  {
    id: 9, imageUrl: 'url', title: 'title9', description: 'description9', price: 9000000, likesCount: 10, isLiked: true,
  },
];

const store = createStore(reducer, entities);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
