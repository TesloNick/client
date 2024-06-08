import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import CarStore from './store/CarStore';
import ServiceStore from './store/ServiceStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{user: new UserStore(), cars: new CarStore(), services: new ServiceStore()}}>
    <App />
  </Context.Provider>
);

/*
ReactDOM.render(
  <Context.Provider value={{
      user: new UserStore(),
  }}>
      <App />
  </Context.Provider>,
document.getElementById('root')
);*/

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/