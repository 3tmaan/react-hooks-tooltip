// Externals
import React from 'react';
import ReactDOM from 'react-dom';
// Internals
import App from './App';

/* ==========================================================================
   Client side rendering
   ========================================================================== */

const rootElement = document.getElementById('app');

const renderApp = (Component) => {
    ReactDOM.render(
        <Component />,
        rootElement,
    );
}

renderApp(App);
