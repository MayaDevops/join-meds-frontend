import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './rootReducers';
import rootSaga from './rootSaga';

export const RESET_STORE = 'RESET_STORE';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [];
middleWares.push(sagaMiddleware);

if (import.meta.env.MODE === 'development') {
  middleWares.push(logger);
}

const combinedReducer = combineReducers({
  ...rootReducers
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined; // 🔑 clears entire redux store
  }

  return combinedReducer(state, action);
};


export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: ()=> middleWares
});

sagaMiddleware.run(rootSaga);
