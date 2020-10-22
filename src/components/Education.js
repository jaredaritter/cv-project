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

  // INCLUDE EDIT AND SUBMIT BUTTONS
  setEditting = () => {
    this.props.setEditting(this.state.section);
  };

  render() {
    const schools = this.props.schools;
    console.log(typeof schools);
    const list = schools.map((school, i) => {
      return <School key={i} school={school} />;
    });

    return (
      <div className="Education">
        <h3>Education</h3>
        {list}
        <button onClick={this.setEditting}>Edit</button>
      </div>
    );
  }
}

export default Education;
