import React, { Component } from 'react';

import LayOutDay from './layOutDay';
import './App.css';

const dayEvents = [ 
  {start: 30, end: 150}, 
  {start: 540, end: 600}, 
  {start: 560, end: 620}, 
  {start: 610, end: 670} 
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LayOutDay dayEvents={dayEvents} />
      </div>
    );
  }
}

export default App;
