// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducer/rootReducer';
// // import { composeWithDevTools } from 'redux-devtools-extension';
// import { composeWithDevTools } from '@redux-devtools/extension';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// export default store;

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})