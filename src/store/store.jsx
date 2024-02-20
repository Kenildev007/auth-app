// store.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Import your reducers
import rootReducer from './reducers/RootReducer'; // Assuming you have a rootReducer

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
