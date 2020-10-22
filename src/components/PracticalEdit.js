import React from 'react';

class PracticalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.company.name,
      position: this.props.company.position,
      responsibilities: this.props.company.responsibilities,
      startDate: this.props.company.startDate,
      endDate: this.props.company.endDate,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const section = 'practical';
    const newPractical = { ...this.state, editting: false };
    this.props.handleSubmit(section, newPractical);
  };

  render() {
    return (
      <div className="Practical">
        <h3>Practical</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Position: </label>
          <input
            type="text"
            name="position"
            placeholder="Study"
            value={this.state.position}
            onChange={this.handleChange}
          />
          <label>Responsibilities: </label>
          <input
            type="text"
            name="responsibilities"
            placeholder="Responsibilities"
            value={this.state.responsibilities}
            onChange={this.handleChange}
          />
          <label>Start Date: </label>
          <input
            type="text"
            name="start-date" // CHANGE NAME TO MATCH STATE VARIABLE
            placeholder="Start Date"
            value={this.state.startDate}
            onChange={this.handleChange}
          />
          <label>End Date: </label>
          <input
            type="text"
            name="end-date" // CHANGE NAME TO MATCH STATE VARIABLE
            placeholder="End Date"
            value={this.state.endDate}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PracticalEdit;
