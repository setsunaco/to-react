import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';    // to work off line
import 'tachyons';
import { searchRobots } from './reducers';


const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));
// const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
    
registerServiceWorker();
