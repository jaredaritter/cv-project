import React from 'react';

function Company(props) {
  return(
    <div>
      <p>{props.company.name}</p>
      <p>{props.company.position}</p>
      <p>{props.company.responsibilities}</p>
      <p>
        {props.company.startDate} -{' '}
        {props.company.endDate}
      </p>
    </div>
  )
}

class Practical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: 'dummy',
    };
  }

  // INCLUDE EDIT AND SUBMIT BUTTONS

  render() {
    const companies = this.props.companies;
    const list = companies.map((company, i) => {
      return <Company key={i} company={company}/>
    })
    return (
      <div className="Practical">
        <h3>Practical</h3>
        {list}
      </div>
    );
  }
}

export default Practical;
