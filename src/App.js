import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import hazel from "./imgs/hazel.jpg";
import tubby from "./imgs/tubby.jpg";
import whiskey from "./imgs/whiskey.jpg";

import Navbar from "./Navbar";
import Home from "./Home";
import Dog from "./Dog.js";

import "./App.css";

function App() {
  App.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };
  return (
    <div className="App">
      <Navbar dogs={App.defaultProps.dogs} />
      <Switch>
        <Route
          exact
          path="/dogs/:name"
          render={(routerProps) => (
            <Dog
              {...routerProps}
              dog={App.defaultProps.dogs.find(
                (dog) =>
                  dog.name.toLowerCase() ===
                  routerProps.match.params.name.toLowerCase()
              )}
            />
          )}
        />
        <Route
          exact
          path="/dogs"
          render={(routerProps) => (
            <Home {...routerProps} dogs={App.defaultProps.dogs} />
          )}
        />
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

export default App;
