import React, { useState, useEffect } from 'react';
import { addToLocalStorage, checkStorageAndUpdate } from '../utils/Helpers';

function Practical(props) {
  const componentName = 'practical';
  const [practical, setPractical] = useState({});
  const [editting, setEditting] = useState(false);
  const { name, position, responsibilities, startDate, endDate } = practical;

  useEffect(() => {
    checkStorageAndUpdate(componentName, setPractical);
  }, []);

  const clearInputs = (e) => {
    e.preventDefault();
    setPractical({
      name: '',
      position: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleChange = (e) => {
    setPractical({ ...practical, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInput = {
      name: e.target.name.value,
      position: e.target.position.value,
      responsibilities: e.target.responsibilities.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
    };
    setPractical(formInput);
    addToLocalStorage(componentName, formInput);
    setEditting(false);
  };

  if (editting) {
    return (
      <div className={props.className}>
        <h3>Practical</h3>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <label>Position: </label>
          <input
            type="text"
            name="position"
            placeholder="Study"
            value={position}
            onChange={handleChange}
          />
          <label>Responsibilities: </label>
          <input
            type="text"
            name="responsibilities"
            placeholder="Responsibilities"
            value={responsibilities}
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
        <h3>Practical</h3>
        <Company company={practical} />
        <button onClick={() => setEditting(true)}>Edit</button>
      </div>
    );
  }
}

function Company(props) {
  return (
    <div>
      <p>{props.company.name}</p>
      <p>{props.company.position}</p>
      <p>{props.company.responsibilities}</p>
      <p>
        {props.company.startDate} - {props.company.endDate}
      </p>
    </div>
  );
}

export default Practical;
