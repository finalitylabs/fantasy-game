import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Store from './models/Todos'

it('renders without crashing', () => {
  const div = document.createElement('div');
  

  const store = Store.Todos.create({ todos: [] });

  ReactDOM.render(<App store={store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});