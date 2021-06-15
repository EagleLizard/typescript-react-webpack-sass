
import './app.scss';
import React from 'react';

interface AppProps {

}

export function App(props: AppProps) {
  return (
    <div className="app-main">
      <div className="header-text">
        Hi 🤠
      </div>
      <div className="text-content">
        This is some text
      </div>
    </div>
  );
}
