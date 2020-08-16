import React, { Component } from "react";

import Dog from "./Dog.js";

export default class Home extends Component {
  render() {
    const dogList = this.props.dogs.map((dog) => (
      <Dog key={dog.name} dog={dog} />
    ));
    return <div>{dogList}</div>;
  }
}
