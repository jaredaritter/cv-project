import React from 'react';

class Practical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [
        {
          name: 'Awesome Inc.',
          position: 'Engineer of Awesomeness',
          responsibilities: 'Making things awesome.',
          startDate: '2005',
          endDate: 'current',
        },
      ],
    };
  }

  // INCLUDE EDIT AND SUBMIT BUTTONS

  render() {
    return (
      <div className="Practical">
        <h3>Practical</h3>
        {/* MOVE EACH COMPANY INTO ITS OWN COMPONENT */}
        <p>{this.state.companies[0].name}</p>
        <p>{this.state.companies[0].position}</p>
        <p>{this.state.companies[0].responsibilities}</p>
        <p>
          {this.state.companies[0].startDate} -{' '}
          {this.state.companies[0].endDate}
        </p>
        <p>Auto Deploy Changes?</p>
      </div>
    );
  }
}

export default Practical;
