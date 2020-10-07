import React from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [
        {
          name: 'University of Awesome',
          study: 'Awesomeness',
          startDate: '2000',
          endDate: 'current',
        },
      ],
    };
  }

  // INCLUDE EDIT AND SUBMIT BUTTONS

  render() {
    return (
      <div className="Education">
        <h3>Education</h3>
        {/* MOVE EACH SCHOOL INTO ITS OWN COMPONENT */}
        <p>{this.state.schools[0].name}</p>
        <p>{this.state.schools[0].study}</p>
        <p>
          {this.state.schools[0].startDate} - {this.state.schools[0].endDate}
        </p>
      </div>
    );
  }
}

export default Education;
