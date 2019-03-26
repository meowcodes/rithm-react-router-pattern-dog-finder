import React, { Component } from 'react';
// import './DogDetails.css';

class DogDetails extends Component {

  render() {
    return(
      <div className="DogDetails">
        <img src={this.props.dogData.src} alt={this.props.dogData.name} />
        <h3>{ this.props.dogData.name }</h3>
        <p>{ this.props.dogData.age }</p>
        <ul>
          { this.props.dogData.facts.map( fact => (
            <li><p>{ fact }</p></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default DogDetails;