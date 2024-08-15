import React from 'react';
import './App.css'

export function App(props) {
    return (
      <div className='App'>
        <h1>Hello React App.</h1>
        <h2>Let's display a list of users.</h2>
      </div>
    );
  }
  // Log to console
  fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json)) 

export default App
