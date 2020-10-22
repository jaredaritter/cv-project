import React from 'react';
import General from './components/General';
import GeneralEdit from './components/GeneralEdit';
import Education from './components/Education';
import EducationEdit from './components/EducationEdit';
import Practical from './components/Practical';
import PracticalEdit from './components/PracticalEdit';
import './App.css';

// TODO
// BUILD EDIT PAGES (GENERAL COMPLETED).
//   - WANT TO EDIT BY COMPONENT AND EDIT ALL COMPONENT FIELDS AT THE SAME TIME WITH SINGLE FORM
//   - WILL NEED ONCHANGE LISTENERS LOCALLY
//   - MAY NEED TO CHANGE LIST ITEMS TO CLASSES TO ALLOW LOCAL STORAGE OF ONCHANGE VALUES
//   - DON'T FORGET TO BIND THIS
//   - HANDLERS IN PARENT FUNCTIONS
// FIGURE OUT HOW TO PULL NAME OF VARIABLE TO CONSOLIDATE HANDLESUBMIT FUNCTION
//   - *SEND SECTION NAME MANUALLY AS VARIABLE FROM EACH SECTION. WORKS FINE.
// MAY NEED SEPARATE BUTTON FOR ADDING NEW CONTENT
// WILL NEED TO DECIDE WHETHER TO HAVE EDUCATION AND PRACTICAL BE OBJECTS ARRAYS
// LISTS ON EDUCATION AND PRACTICAL MAY BE RENDERING TWICE BASED ON DOUBLE CONSOLE.LOG (NOT PRIORITY, ADVANCED)

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
