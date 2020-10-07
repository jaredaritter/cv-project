import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: 'dummy',
    };
  }

  render() {
    return (
      <div className="App">
        <General />
        <Education />
        <Practical />
      </div>
    );
  }
}

export default App;
