import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux'
import { Provider} from 'react-redux'
import reducer from '/reducers'

import './index.css';
import App from './components/App';
import App2 from './components/App';

import * as serviceWorker from './serviceWorker';

//全てのstateはこのstoreに集約されている。
const store = createStore(reducer)

console.log(store);



ReactDOM.render(
  <React.StrictMode>
    {/* //providerコンポーネントでラップした後、storeにあるstateを渡す。 */}
    <Provider store={store}>
    <App2 />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
