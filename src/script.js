import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/styles.scss';
import {App} from './components/App.jsx';
import {Provider} from 'react-redux'
import {store} from './store.js';




const root = createRoot(document.getElementById('app'));


root.render(
    <Provider store={store}>
        <App />
    </Provider>
)