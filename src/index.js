import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import slide3 from "./imgs/slide3.jpeg";
import slide2 from "./imgs/slide2.jpg";
import finaly_cleanup from "./imgs/finaly_cleanup.jpg";
import laptop from "./imgs/laptop.jpg";
import product1 from "./imgs/product1.jpg";
import finnaly from "./imgs/finnaly.jpg";
import cards from "./imgs/cards.jpg";

export {
  slide2,
  slide3,
  finaly_cleanup,
  laptop,
  product1,
  finnaly,
  cards
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
