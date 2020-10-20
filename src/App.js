import React from 'react';
import General from './components/General';
import GeneralEdit from './components/GeneralEdit';
import Education from './components/Education';
import Practical from './components/Practical';
import './App.css';

// TODO
// LISTS ON EDUCATION AND PRACTICAL MAY BE RENDERING TWICE BASED ON DOUBLE CONSOLE.LOG (NOT PRIORITY, ADVANCED)
// BUILD EDIT PAGES.
//   - WANT TO EDIT BY COMPONENT AND EDIT ALL COMPONENT FIELDS AT THE SAME TIME WITH SINGLE FORM
//   - WILL NEED ONCHANGE LISTENERS LOCALLY
//   - MAY NEED TO CHANGE LIST ITEMS TO CLASSES TO ALLOW LOCAL STORAGE OF ONCHANGE VALUES
//   - DON'T FORGET TO BIND THIS
//   - HANDLERS IN PARENT FUNCTIONS

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {
        name: 'Jared',
        email: 'awesome@email.com',
        phone: '555-555-5555',
        editting: false,
      }, 
      education: {
        schools: [
          {
            name: 'University of Awesome',
            study: 'Awesomeness',
            startDate: '2000',
            endDate: 'current',
          },
          {
            name: 'University of Amazing',
            study: 'Amazingness',
            startDate: '2000',
            endDate: 'current',
          }
        ]
      },
      practical: {
        companies: [
          {
            name: 'Awesome Inc.',
            position: 'Engineer of Awesomeness',
            responsibilities: 'Making things awesome.',
            startDate: '2005',
            endDate: 'current',
          }
        ]
      }
    };
    // this.generalChoice = this.GeneralChoice.bind(this);
  }

  GeneralChoice() {
    if (this.state.general.editting) {
      return <GeneralEdit general={this.state.general}/>;
    } else {
      return <General general={this.state.general}/>;
    }
  }

  render() {
    const general = this.GeneralChoice();
    return (
      <div className="App">
        {general}
        <Education schools={this.state.education.schools}/>
        <Practical companies={this.state.practical.companies}/>
      </div>
    );
  }
}

export default App;
