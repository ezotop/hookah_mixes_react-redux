import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import ErrorBoundary from './components/error-boundary';
import TasteService from './services/taste-service';
import TasteServiceContext from './components/taste-service-context';
import store from './store';

import './index.css';

const tasteService = new TasteService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <TasteServiceContext.Provider value={tasteService}>
        <App/>
      </TasteServiceContext.Provider>
    </ErrorBoundary>
  </Provider>
, document.getElementById('root'));
