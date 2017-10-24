import React, { Component } from 'react';

import LayOutDay from './layOutDay';
import './App.css';

const dayEvents = [ 
  {start: 30, end: 150}, 
  {start: 540, end: 600}, 
  {start: 560, end: 620}, 
  {start: 610, end: 670} 
];

/*
const dayEvents = [ 
  {start: -100, end: -50}, 
  {start: 0, end: 100}, 
  {start: 30, end: 150}, 
  {start: 540, end: 600}, 
  {start: 560, end: 620}, 
  {start: 610, end: 670}, 
  {start: 610, end: 770}, 
];
*/

// const dayEvents = Array(2000);
// const dayEvents = Array(24).fill({start: -30, end: 30});

/*
const dayEvents = [ 
  {start: -60, end: -30}, //rejected
  {start: -60, end: -30}, //rejected
  {start: -60, end: -30}, //rejected
  {start: -30, end: 30}, 
  {start: 0, end: 60}, 
  {start: 30, end: 150}, 
  {start: 540, end: 600}, 
  {start: 560, end: 620}, 
  {start: 610, end: 770},
  {start: 750, end: 770}, //rejected
  {start: 750, end: 770}, //rejected
];
*/
/*
const dayEvents = [ 
  {start: 30, end: 150}, 
  {start: 150, end: 200}, 
  {start: 160, end: 200}, 
  {start: 180, end: 240}, 
  {start: 200, end: 240}, 
  {start: 200, end: 260}, 
  {start: 200, end: 280}, 
  {start: 340, end: 400}, 
  {start: 360, end: 420}, 
  {start: 380, end: 450}, 
  {start: 510, end: 570}, 
  {start: 530, end: 580}, 
  {start: 600, end: 700}, 
];
*/


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
