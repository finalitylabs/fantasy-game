import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

import Store from './models/Todos'

const store = Store.Todos.create({ todos: [] });

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
