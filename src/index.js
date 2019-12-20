import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './store'
import {AppContainer} from './container'



ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    ,document.getElementById("calc-section")
)