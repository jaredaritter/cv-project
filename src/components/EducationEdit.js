import React, { useState } from 'react';

function EducationEdit(props) {
  const [name, setName] = useState(props.school.name);
  const [study, setStudy] = useState(props.school.study);
  const [startDate, setStartDate] = useState(props.school.startDate);
  const [endDate, setEndDate] = useState(props.school.endDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const education = {
      name: name,
      study: study,
      startDate: startDate,
      endDate: endDate,
      editting: false,
    };
    props.handleSubmit(education);
  };

  return (
    <div className="Education">
      <h3>Education</h3>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Study: </label>
        <input
          type="text"
          name="study"
          placeholder="Study"
          value={study}
          onChange={(e) => setStudy(e.target.value)}
        />
        <label>Start Date: </label>
        <input
          type="text"
          name="start-date" // CHANGE NAME TO MATCH STATE VARIABLE
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date: </label>
        <input
          type="text"
          name="end-date" // CHANGE NAME TO MATCH STATE VARIABLE
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EducationEdit;
