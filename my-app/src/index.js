import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SearchContextProvider } from './context/SearchContext';
import { AuthContextProvider } from './context/AuthContext';
// import { StateProvider } from "@/context/StateContext";
// import reducer, { initialState } from "@/context/StateReducers";
import { StateProvider } from './pages/context/StateContext';
import reducer, { initialeState } from './pages/context/StateReducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <SearchContextProvider>
      <AuthContextProvider>
      <StateProvider initialState={initialeState} reducer={reducer} >

          <App />
      </StateProvider>

      </AuthContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
