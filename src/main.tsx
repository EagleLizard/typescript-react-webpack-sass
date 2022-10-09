
import React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { App } from './app/app';

import './main.scss';

const Index = () => {
  return (
    <Router>
      <App/>
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById('app-root'));
