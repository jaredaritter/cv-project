import React from 'react';
import General from './components/General';
import GeneralEdit from './components/GeneralEdit';
import Education from './components/Education';
import EducationEdit from './components/EducationEdit';
import Practical from './components/Practical';
import PracticalEdit from './components/PracticalEdit';
import './App.css';

// TODO
// RENAME START-DATE AND END-DATE IN EDIT COMPONENTS TO MATCH STATE, CURRENTLY BROKEN
// MOVE SECTION NAMES INTO COMPONENT TO REMOVE HARD CODING IN FUNCTION
// PULL CONDITIONAL LOGIC INTO SEPARATE COMPONENTS FOR THE THREE SECTIONS TO REDUCE CLUTTER IN THE APP RENDER FUNCTION

class App extends React.Component {
  constructor(props) {
    super(props);
    // CHOOSING TO HOLD STATE IN APP COMPONENT AND USE CONDITIONAL RENDERING TO PASS DOWN DATA AS PROPS
    this.state = {
      general: {
        name: 'Jared',
        email: 'awesome@email.com',
        phone: '555-555-5555',
        editting: false,
      },
      education: {
        name: 'University of Awesome',
        study: 'Awesomeness',
        startDate: '2000',
        endDate: 'current',
        editting: false,
      },
      practical: {
        name: 'Awesome Inc.',
        position: 'Engineer of Awesomeness',
        responsibilities: 'Making things awesome.',
        startDate: '2005',
        endDate: 'current',
        editting: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setEditting = this.setEditting.bind(this);
  }

  handleSubmit(section, data) {
    this.setState({
      [section]: data,
    });
  }

  // THIS IS VERY LIKELY THE WRONG WAY TO HANDLE THIS BUT WILL HAVE TO WORK FOR NOW UNTIL I KNOW THE MORE APPROPRIATE WAY
  setEditting(section) {
    const newSection = this.state[section];
    newSection.editting = true;
    this.setState({
      [section]: newSection,
    });
  }

  render() {
    // IT'S LIKELY THAT BETTER PRACTICE WOULD BE TO HAVE SEPERATE COMPONENTS WITH CONDITIONAL LOGIC AND THEN SEND RETURN TO THIS RENDER. THIS LOOKS MESSY.
    return (
      <div className="App">
        {this.state.general.editting ? (
          <GeneralEdit
            general={this.state.general}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <General
            general={this.state.general}
            setEditting={this.setEditting}
          />
        )}
        {this.state.education.editting ? (
          <EducationEdit
            school={this.state.education}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <Education
            school={this.state.education}
            setEditting={this.setEditting}
          />
        )}
        {this.state.practical.editting ? (
          <PracticalEdit
            company={this.state.practical}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <Practical
            company={this.state.practical}
            setEditting={this.setEditting}
          />
        )}
      </div>
    );
  }
}

export default App;
