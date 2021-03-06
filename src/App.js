import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Final from './components/Final';
import Practical from './components/Practical';
import './App.css';

// TODO
// ALLOW FOR INPUT OF MULTIPLE SCHOOLS AND JOBS (SEE EXAMPLE PROJECTS IF NEEDED)
// SET UP FINAL PAGE THAT COMBINES ALL INFORMATION IN SINGLE UNIFIED FORM
// BUILD MULTIPLE LAYOUTS FOR CV
// ADD SELECTOR TO CHOOSE LAYOUT
// ALLOW PRINTING OF PAGE
// SET UP LOCALSTORAGE (COMPLETED)
// ADD BUTTON TO CLEAR INPUTS (COMPLETED)

function App() {
  return (
    <div className="App">
      <General className="section" />
      <Education className="section" />
      <Practical className="section" />
      <Final className="section" />
    </div>
  );
}

export default App;
