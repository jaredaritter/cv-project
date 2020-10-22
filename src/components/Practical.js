import React from 'react';

function Company(props) {
  return (
    <div>
      <p>{props.company.name}</p>
      <p>{props.company.position}</p>
      <p>{props.company.responsibilities}</p>
      <p>
        {props.company.startDate} - {props.company.endDate}
      </p>
    </div>
  );
}

class Practical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'practical',
    };
  }

  // INCLUDE EDIT AND SUBMIT BUTTONS
  setEditting = () => {
    this.props.setEditting(this.state.section);
  };

  render() {
    const companies = this.props.companies;
    const list = companies.map((company, i) => {
      return <Company key={i} company={company} />;
    });
    return (
      <div className="Practical">
        <h3>Practical</h3>
        {list}
        <button onClick={this.setEditting}>Edit</button>
      </div>
    );
  }
}

export default Practical;
