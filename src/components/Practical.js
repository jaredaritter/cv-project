import React from 'react';

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

function Practical(props) {
  const section = 'practical';
  // INCLUDE EDIT AND SUBMIT BUTTONS
  const setEditting = () => {
    props.setEditting(section);
  };

  return (
    <div className="Practical">
      <h3>Practical</h3>
      <Company company={props.company} />
      <button onClick={setEditting}>Edit</button>
    </div>
  );
}

export default Practical;
