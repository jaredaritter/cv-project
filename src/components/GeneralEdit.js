import React, { useState } from 'react';

function GeneralEdit(props) {
  const [name, setName] = useState(props.general.name);
  const [email, setEmail] = useState(props.general.email);
  const [phone, setPhone] = useState(props.general.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const general = {
      name: name,
      email: email,
      phone: phone,
      editting: false,
    };
    props.handleSubmit(general);
  };

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
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone: </label>
        <input
          type="tel"
          name="phone"
          placeholder="Telephone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralEdit;
