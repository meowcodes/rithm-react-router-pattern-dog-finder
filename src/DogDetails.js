import React, { Component } from 'react';
// import './DogDetails.css';

class DogDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      dog: this.props.dogData
    }
  }

  findDog(name){
    let dog = this.props.dogData.filter( dog => dog.name === name)[0]
    return dog;
  }

  render() {
    return(
      <div className="DogDetails">
        <img src={this.state.dog.src} alt={this.state.dog.name} />
        <h3>{ this.state.dog.name }</h3>
        <p>{ this.state.dog.age }</p>
        <ul>
          { this.state.dog.facts.map( fact => (
            <li><p>{ fact }</p></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default DogDetails;