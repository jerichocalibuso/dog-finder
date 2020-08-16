import React, { Component } from "react";

export default class Dog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const dog = this.props.dog;
    console.log(this);
    return (
      <div>
        <img onClick={this.handleClick} src={dog.src} alt={dog.name} />
        <h2 onClick={this.handleClick}>{dog.name}</h2>
        <div className="" hidden={!this.state.isClicked}>
          <ul>
            <li>Age: {dog.age}</li>
            {dog.facts.map((fact, i) => (
              <li key={dog.name + i}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
