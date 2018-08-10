import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';    // to work off line
import 'tachyons';
import { searchRobots } from './reducers';


// const store = createStore(rootReducer);
const store = createStore(searchRobots);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
    
registerServiceWorker();
