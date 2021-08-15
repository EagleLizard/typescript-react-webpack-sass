
import './app.scss';
import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import { TEST_CONSTANT } from '@constants/constants';

interface AppProps {

}

export function App(props: AppProps) {
  return (
    <div className="app-main">
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="/home">
          <Switch>
            <Route exact path="/home/">
              <div className="home-route">
                <div className="header-text">
                  Hi 🤠
                </div>
                <div className="text-content">
                  This is some text
                </div>
                <div className="text-content">
                  Test relative TS imports: <em>{TEST_CONSTANT}</em>
                </div>
                <div className="text-content">
                  <Link to="/home/test">Test subroute</Link>
                </div>
              </div>
            </Route>
            <Route path="/home/test">
              <div className="test-route">
                <div className="text-content">
                  <Link to="/">Go back</Link>
                </div>
                <div className="text-content">
                  Test Subroute
                </div>
              </div>
            </Route>
          </Switch>
        </Route>
      </Switch>
    </div>
  );
}
