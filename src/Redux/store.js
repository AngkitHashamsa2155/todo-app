import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/rootReducer';
import { todos } from './saga/rootSaga';

// const initialState = {};
const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare(todos);
export default store;
