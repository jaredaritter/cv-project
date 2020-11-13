import React, { useState, useEffect } from 'react';
import { addToLocalStorage, checkStorageAndUpdate } from '../utils/Helpers';

function Education(props) {
  const componentName = 'education';
  const [education, setEducation] = useState([{}]);
  const [editting, setEditting] = useState(false);
  // const { name, study, startDate, endDate } = education[0];

  useEffect(() => {
    checkStorageAndUpdate(componentName, setEducation);
  }, []);

  useEffect(() => {
    addToLocalStorage(componentName, education); // MOVE TO USE EFFECT?
  }, [education]);

  const clearInputs = (e) => {
    e.preventDefault();
    setEducation({
      name: '',
      study: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleChange = (e) => {
    setEducation([{ ...education[0], [e.target.name]: e.target.value }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInput = {
      name: e.target.name.value,
      study: e.target.study.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
    };
    setEducation([formInput]);
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
            value={education[0].name}
            onChange={handleChange}
          />
          <label>Study: </label>
          <input
            type="text"
            name="study"
            placeholder="Study"
            value={education[0].study}
            onChange={handleChange}
          />
          <label>Start Date: </label>
          <input
            type="text"
            name="startDate"
            placeholder="Start Date"
            value={education[0].startDate}
            onChange={handleChange}
          />
          <label>End Date: </label>
          <input
            type="text"
            name="endDate"
            placeholder="End Date"
            value={education[0].endDate}
            onChange={handleChange}
          />
          <button type="button" onClick={clearInputs}>
            Clear
          </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <h3>Education</h3>
        <School school={education[0]} />
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
