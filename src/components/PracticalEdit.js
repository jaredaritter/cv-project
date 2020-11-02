import React, { useState } from 'react';

function PracticalEdit(props) {
  const [name, setName] = useState(props.company.name);
  const [position, setPosition] = useState(props.company.position);
  const [responsibilities, setResponsibilities] = useState(
    props.company.responsibilities
  );
  const [startDate, setStartDate] = useState(props.company.startDate);
  const [endDate, setEndDate] = useState(props.company.endDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const practical = {
      name: name,
      position: position,
      responsibilities: responsibilities,
      startDate: startDate,
      endDate: endDate,
      editting: false,
    };
    props.handleSubmit(practical);
  };

  return (
    <div className="Practical">
      <h3>Practical</h3>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Position: </label>
        <input
          type="text"
          name="position"
          placeholder="Study"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <label>Responsibilities: </label>
        <input
          type="text"
          name="responsibilities"
          placeholder="Responsibilities"
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
        />
        <label>Start Date: </label>
        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date: </label>
        <input
          type="text"
          name="endDate"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PracticalEdit;
