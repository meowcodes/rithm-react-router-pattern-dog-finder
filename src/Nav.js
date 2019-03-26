import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
  render() {
    return(
      <nav className="Nav">
        <NavLink exact to="/dogs">Home</NavLink>
        { this.props.dogData.map( dog => (
          <NavLink exact to={`/dogs/${dog.name}`}>
            {dog.name}
          </NavLink>
        ))}
      </nav>
    )
  }
}

export default Nav;