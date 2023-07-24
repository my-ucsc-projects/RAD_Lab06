import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelloWorld from './components/helloworld'
import IncrementCounter from './components/counter'
import Toggle from './components/toggle'
import Timer from './components/timer';
import Todo from './components/TodoList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <HelloWorld/>
    <IncrementCounter/><br/>
    <Toggle/>
    <Timer/>
    <Todo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
