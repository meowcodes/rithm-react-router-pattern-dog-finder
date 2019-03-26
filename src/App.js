import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import whiskey from './whiskey.jpg';
import hazel from './hazel.jpg';
import tubby from './tubby.jpg';
import './App.css';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 0,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina hates Tubby."
        ]
      }
    ]
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav dogData={this.props.dogs}/>
          <Switch>
            <Route 
              exact 
              path="/dogs"
              render={() => <DogList dogData={this.props.dogs} />}
            />
            <Route 
              exact
              path="/dogs/:name"
              render={routeProps => <DogDetails {...routeProps} dogData={this.props.dogs} />}
            />
            <Redirect to="/dogs" />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
