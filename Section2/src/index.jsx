//import React and React DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//create an div with an ID root
const element = document.getElementById("root");
// Ask react to to use that element
const root = ReactDOM.createRoot(element);
//import a component and use that component and display whatever's in it
root.render(<App />);