import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './utils/StateProvider';
import reducer, { initialState } from './utils/reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
