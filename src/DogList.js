import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './DogList.css';

class DogList extends Component {
  render() {
    return(
      <div className="DogList">
        { this.props.dogData.map( dog => (
          <div className="Doglist-dog">
            <img src={dog.src} alt={dog.name} />
            <p><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></p>
          </div>
        ))}
      </div>
    )
  }
}

export default DogList;