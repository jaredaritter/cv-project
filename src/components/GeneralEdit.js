import React from 'react';

class GeneralEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.general.name,
      email: this.props.general.email,
      phone: this.props.general.phone,
    };
  }

  // NEW VERSION
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const section = 'general';
    const newGeneral = { ...this.state, editting: false };
    this.props.handleSubmit(section, newGeneral);
  };
  // INCLUDE EDIT AND SUBMIT BUTTONS

  render() {
    const { name, email, phone } = this.props.general;
    return (
      <div className="General">
        <h3>General</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    );
  }
}

export default GeneralEdit;
