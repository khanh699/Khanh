import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import storageSession from 'redux-persist/lib/storage/session'; // defaults to sessionStorage for web

const persistConfig = {
  key: 'root',
  // storage, // This uses the imported localStorage-based storage
  storage: storageSession, // This uses the imported sessionStorage-based storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);

export { store, persistor };