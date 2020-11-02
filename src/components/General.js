import React from 'react';

function General(props) {
  const section = 'general';
  const { name, email, phone } = props.general;

  const setEditting = () => {
    props.setEditting(section);
  };

  return (
    <div className="General">
      <h3>General</h3>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <button onClick={setEditting}>Edit</button>
    </div>
  );
}

export default General;
