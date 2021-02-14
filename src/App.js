import { Provider } from 'react-redux';
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from 'redux';
import Connected from './Connected';
import {reducer} from './reducers'
import logger from 'redux-logger'
import { watchLoadData } from './sagas';

function App() {
const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducer,applyMiddleware(logger,sagaMiddleware))

  sagaMiddleware.run(watchLoadData)

  return (
   <Provider store={store}>
    <Connected />
   </Provider>
  );
}

export default App;
