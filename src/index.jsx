import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const entities = [
  {
    id: 1, imageUrl: 'url', title: 'title1', description: 'description1', price: 1000000, likes: 6,
  },
  {
    id: 2, imageUrl: 'url', title: 'title2', description: 'description2', price: 2000000, likes: 2,
  },
  {
    id: 3, imageUrl: 'url', title: 'title3', description: 'description3', price: 3000000, likes: 0,
  },
  {
    id: 4, imageUrl: 'url', title: 'title4', description: 'description4', price: 4000000, likes: 3,
  },
  {
    id: 5, imageUrl: 'url', title: 'title5', description: 'description5', price: 5000000, likes: 1,
  },
  {
    id: 6, imageUrl: 'url', title: 'title6', description: 'description6', price: 6000000, likes: 4,
  },
  {
    id: 7, imageUrl: 'url', title: 'title7', description: 'description7', price: 7000000, likes: 13,
  },
  {
    id: 8, imageUrl: 'url', title: 'title8', description: 'description8', price: 8000000, likes: 0,
  },
  {
    id: 9, imageUrl: 'url', title: 'title9', description: 'description9', price: 9000000, likes: 10,
  },
];

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
