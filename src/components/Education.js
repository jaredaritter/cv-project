import React from 'react';

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

function Education(props) {
  const section = 'education';

  const setEditting = () => {
    props.setEditting(section);
  };

  return (
    <div className="Education">
      <h3>Education</h3>
      <School school={props.school} />
      <button onClick={setEditting}>Edit</button>
    </div>
  );
}

export default Education;
