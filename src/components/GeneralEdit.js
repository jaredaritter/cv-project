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

  render() {
    return (
      <div className="General">
        <h3>General</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Phone: </label>
          <input
            type="tel"
            name="phone"
            placeholder="Telephone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GeneralEdit;
