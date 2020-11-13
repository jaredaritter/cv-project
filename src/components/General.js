import React, { useState, useEffect } from 'react';
import { addToLocalStorage, checkStorageAndUpdate } from '../utils/Helpers';

function General(props) {
  const componentName = 'general';
  const [general, setGeneral] = useState({});
  const [editting, setEditting] = useState(false);
  const { name, email, phone } = general;

  useEffect(() => {
    checkStorageAndUpdate(componentName, setGeneral);
  }, []);

  const clearInputs = (e) => {
    e.preventDefault();
    setGeneral({
      name: '',
      email: '',
      phone: '',
    });
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
    };
    setGeneral(formInput);
    addToLocalStorage(componentName, formInput);
    setEditting(false);
  };

  if (editting) {
    return (
      <div className={props.className}>
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
        <h3>General</h3>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <button type="button" onClick={() => setEditting(true)}>
          Edit
        </button>
      </div>
    );
  }
}

export default General;
