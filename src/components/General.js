import React from 'react';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jared',
      email: 'email@email.com',
      phone: '555-555-5555',
    };
  }

  // INCLUDE EDIT AND SUBMIT BUTTONS

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="General">
        <h3>General</h3>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    );
  }
}

export default General;
