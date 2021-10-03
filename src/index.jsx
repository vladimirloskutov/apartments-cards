import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';

const entities = [
  {
    id: 1, imageUrl: '/images/1.jpg', title: '1-к. квартира, 44,2 м², 9/16 эт.', description: 'Санкт-Петербург, Ладожская', price: 1000000, likesCount: 6, isLiked: false,
  },
  {
    id: 2, imageUrl: '/images/1.jpg', title: '1-к. квартира, 40 м², 9/12 эт.', description: 'Санкт-Петербург, Площадь Восстания', price: 2000000, likesCount: 2, isLiked: true,
  },
  {
    id: 3, imageUrl: '/images/1.jpg', title: '2-к. квартира, 46,3 м², 2/5 эт.', description: 'Санкт-Петербург, Обводный канал', price: 3000000, likesCount: 0, isLiked: false,
  },
  {
    id: 4, imageUrl: '/images/1.jpg', title: 'Комната 25 м² в 6-к., 13/15 эт.', description: 'Санкт-Петербург, Автово', price: 4000000, likesCount: 3, isLiked: true,
  },
  {
    id: 5, imageUrl: '/images/1.jpg', title: 'Студия, 28 м², 3/21 эт.', description: 'Санкт-Петербург, Девяткино', price: 5000000, likesCount: 1, isLiked: true,
  },
  {
    id: 6, imageUrl: '/images/1.jpg', title: '2-к. квартира, 50 м², 6/9 эт.', description: 'Санкт-Петербург, Ладожская', price: 6000000, likesCount: 4, isLiked: false,
  },
  {
    id: 7, imageUrl: '/images/1.jpg', title: '1-к. квартира, 40,1 м², 11/23 эт.', description: 'Санкт-Петербург, Озерки', price: 7000000, likesCount: 13, isLiked: true,
  },
  {
    id: 8, imageUrl: '/images/1.jpg', title: '1-к. квартира, 33 м², 3/5 эт.', description: 'Санкт-Петербург, Удельная', price: 8000000, likesCount: 0, isLiked: false,
  },
  {
    id: 9, imageUrl: '/images/1.jpg', title: '1-к. квартира, 36,4 м², 9/15 эт.', description: 'Санкт-Петербург, Академическая', price: 9000000, likesCount: 10, isLiked: true,
  },
];

const store = createStore(reducer, entities);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
