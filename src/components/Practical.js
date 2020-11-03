import React, { useState } from 'react';

function Practical(props) {
  const [practical, setPractical] = useState({
    name: 'Awesome Inc.',
    position: 'Engineer of Awesomeness',
    responsibilities: 'Making things awesome.',
    startDate: '2005',
    endDate: 'current',
    editting: false,
  });
  const { name, position, responsibilities, startDate, endDate } = practical;

  const setEditting = () => {
    setPractical({ ...practical, editting: true });
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
      editting: false,
    };
    setPractical(formInput);
  };

  if (practical.editting) {
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <h3>Practical</h3>
        <Company company={practical} />
        <button onClick={setEditting}>Edit</button>
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
