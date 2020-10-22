import React from 'react';

function School(props) {
  return (
    <div>
      <p>{props.school.name}</p>
      <p>{props.school.study}</p>
      <p>
        {props.school.startDate} - {props.school.endDate}
      </p>
    </div>
  );
}

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'education',
    };
  }

  setEditting = () => {
    this.props.setEditting(this.state.section);
  };

  render() {
    return (
      <div className="Education">
        <h3>Education</h3>
        <School school={this.props.school} />
        <button onClick={this.setEditting}>Edit</button>
      </div>
    );
  }
}

export default Education;
