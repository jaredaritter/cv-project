import React, { useState } from 'react';

function Education(props) {
  const [education, setEducation] = useState({
    name: 'University of Awesome',
    study: 'Awesomeness',
    startDate: '2000',
    endDate: 'current',
  });
  const [editting, setEditting] = useState(false);
  const { name, study, startDate, endDate } = education;

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInput = {
      name: e.target.name.value,
      study: e.target.study.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
    };
    setEducation(formInput);
    setEditting(false);
  };

  if (editting) {
    return (
      <div className={props.className}>
        <h3>Education</h3>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <label>Study: </label>
          <input
            type="text"
            name="study"
            placeholder="Study"
            value={study}
            onChange={handleChange}
          />
          <label>Start Date: </label>
          <input
            type="text"
            name="startDate"
            placeholder="Start Date"
            value={startDate}
            onChange={handleChange}
          />
          <label>End Date: </label>
          <input
            type="text"
            name="endDate"
            placeholder="End Date"
            value={endDate}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <h3>Education</h3>
        <School school={education} />
        <button onClick={() => setEditting(true)}>Edit</button>
      </div>
    );
  }
}

function School(props) {
  return (
    <div>
      <p>{props.school.name}</p>
      <p>{props.school.study}</p>
      <p>
        {props.school.startDate} - {props.school.endDate}
      </p>
    </div>
  );
}

export default Education;
