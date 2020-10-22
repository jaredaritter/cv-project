import React from 'react';

class EducationEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.school.name,
      study: this.props.school.study,
      startDate: this.props.school.startDate,
      endDate: this.props.school.endDate,
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
    const section = 'education';
    const newEducation = { ...this.state, editting: false };
    this.props.handleSubmit(section, newEducation);
  };

  render() {
    return (
      <div className="Education">
        <h3>Education</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Study: </label>
          <input
            type="text"
            name="study"
            placeholder="Study"
            value={this.state.study}
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

export default EducationEdit;
