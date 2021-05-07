import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { SplashScreenLoader } from './components/FunctionalComponents/SplashScreenLoader';
import SearchReducer from './store/AppReducer';
import thunk from 'redux-thunk';



const rootReducer = combineReducers({
  search: SearchReducer
})
const store = createStore(
  rootReducer, applyMiddleware(thunk)
)

export default function App() {
 
  return (
    <Provider store={store}>
      <SplashScreenLoader />
    </Provider>

  );
}
