import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import './App.css';

// TODO
// ALLOW FOR INPUT OF MULTIPLE SCHOOLS AND JOBS
// SET UP LOCALSTORAGE

function App() {
  return (
    <div className="App">
      <General className="section" />
      <Education className="section" />
      <Practical className="section" />
    </div>
  );
}

export default App;
