import React, { useState } from 'react';

function General() {
  const [general, setGeneral] = useState({
    name: 'Jared',
    email: 'awesome@email.com',
    phone: '555-555-5555',
    editting: false,
  });
  const { name, email, phone } = general;

  const setEditting = () => {
    setGeneral({ ...general, editting: true });
  };

  const handleChange = (e) => {
    setGeneral({ ...general, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInput = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      editting: false,
    };
    setGeneral(formInput);
  };

  if (general.editting) {
    return (
      <div className="General">
        <h3>General</h3>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <label>Phone: </label>
          <input
            type="tel"
            name="phone"
            placeholder="Telephone"
            value={phone}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
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
}

export default General;
