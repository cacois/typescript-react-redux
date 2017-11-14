import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as redux from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { State } from './state';
import { reducers } from './reducers';
import Counter from './components/counter';

let enhancer: any;

if (typeof(window) !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    redux.applyMiddleware(thunk)
  );
} else {
  enhancer = redux.applyMiddleware(thunk);
}

const store: redux.Store<State> = redux.createStore(
  reducers,
  {} as State,
  enhancer
);

const Root: React.SFC<{}> = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

window.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('redux-app-root');
  ReactDOM.render(<Root />, rootEl);
});
