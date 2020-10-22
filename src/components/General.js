import React from 'react';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'general',
    };
  }

  // INCLUDE EDIT AND SUBMIT BUTTONS
  setEditting = () => {
    this.props.setEditting(this.state.section);
  };

  render() {
    const { name, email, phone } = this.props.general;
    return (
      <div className="General">
        <h3>General</h3>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <button onClick={this.setEditting}>Edit</button>
      </div>
    );
  }
}

export default General;
