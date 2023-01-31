import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.js'

function Sum(a,b) {
  return <h2>Sum of  { a } and  { b } is equal to { a + b}  </h2>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Sum(148 , 256));


