import React from 'react';
import ReactDOM from 'react-dom';
import { Tetris } from './components/Tetris';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Tetris />
  </React.StrictMode>,
  document.getElementById('root')
);
