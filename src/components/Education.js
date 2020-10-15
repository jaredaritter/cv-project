import React from 'react';

function School(props) {
  return(
    <div>
      <p>{props.school.name}</p>
      <p>{props.school.study}</p>
      <p>
        {props.school.startDate} - {props.school.endDate}
      </p>
    </div>
  )
}

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: 'dummy',
    };
  }

  // INCLUDE EDIT AND SUBMIT BUTTONS

  render() {
    const schools = this.props.schools
    const list = schools.map((school, i) => {
      return <School key={i} school={school}/>
    })
    return (
      <div className="Education">
        <h3>Education</h3>
        {list}
      </div>
    );
  }
}

export default Education;
