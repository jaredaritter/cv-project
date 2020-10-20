import React from 'react';

class GeneralEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: 'dummy',
    };
  }

  // INCLUDE EDIT AND SUBMIT BUTTONS

  render() {
    const { name, email, phone } = this.props.general;
    return (
      <div className="General">
        <h3>{this.state.dummy} <button>Submit</button></h3> 
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    );
  }
}

export default GeneralEdit;
