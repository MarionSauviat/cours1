import './main.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App.jsx';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

const Card = (
  <main>
    <h1> HEDY LAMARR'S TODOS</h1>
    <img src="https://i.imgur.com/yXOvdOSs.jpg" />
    <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
    </ul>
  </main>
);
//rendre profils

root.render(<App />);
