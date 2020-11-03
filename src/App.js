import React, { useState } from 'react';
import General from './components/General';
import GeneralEdit from './components/GeneralEdit';
import Education from './components/Education';
import EducationEdit from './components/EducationEdit';
import Practical from './components/Practical';
import PracticalEdit from './components/PracticalEdit';
import './App.css';

// TODO
// MOVE STATE TO INDIVIDUAL COMPONENTS
// USE CONDITIONAL LOGIC TO CHOOSE BETWEEN INFORMATION AND FORM
// SET UP LOCALSTORAGE

function App() {
  const [education, setEducation] = useState({
    name: 'University of Awesome',
    study: 'Awesomeness',
    startDate: '2000',
    endDate: 'current',
    editting: false,
  });
  const [practical, setPractical] = useState({
    name: 'Awesome Inc.',
    position: 'Engineer of Awesomeness',
    responsibilities: 'Making things awesome.',
    startDate: '2005',
    endDate: 'current',
    editting: false,
  });

  // TECHNICALLY NOT INITIALIZING THE HOOK USING CONDITIONALS SO SHOULD NOT BE A PROBLEM
  const setEditting = (section) => {
    if (section === 'education') {
      setEducation({ ...education, editting: true });
    } else if (section === 'practical') {
      setPractical({ ...practical, editting: true });
    } else {
      console.error('Invalid Section Requested');
    }
  };

  // IT'S LIKELY THAT BETTER PRACTICE WOULD BE TO HAVE SEPERATE COMPONENTS WITH CONDITIONAL LOGIC AND THEN SEND RETURN TO THIS RENDER. THIS LOOKS MESSY.
  return (
    <div className="App">
      <General />
      {education.editting ? (
        <EducationEdit
          school={education}
          handleSubmit={(data) => setEducation(data)}
        />
      ) : (
        <Education school={education} setEditting={setEditting} />
      )}
      {practical.editting ? (
        <PracticalEdit
          company={practical}
          handleSubmit={(data) => setPractical(data)}
        />
      ) : (
        <Practical company={practical} setEditting={setEditting} />
      )}
    </div>
  );
}

export default App;
