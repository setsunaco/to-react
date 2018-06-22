import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import App from './App';
import registerServiceWorker from './registerServiceWorker';    // to work off line
import 'tachyons';


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello greeting={'Ace also!'}/>, document.getElementById('root'));
registerServiceWorker();
