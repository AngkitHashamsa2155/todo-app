import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/rootReducer';
import { todos } from './saga/rootSaga';

// const initialState = {};
const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];
const store = createStore(
  rootReducer /* preloadedState, */,
  applyMiddleware(...middleware)
);
sagaMiddleWare(todos);
export default store;
