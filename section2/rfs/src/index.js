import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import './index.css';
import registerServiceWorker from './registerServiceWorker';    // to work off line
import 'tachyons';
import {robots} from './robots';


ReactDOM.render(
    <div>
        <CardList robots={robots}/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
