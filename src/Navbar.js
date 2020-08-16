import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const dogLinks = this.props.dogs.map((dog) => (
      <NavLink
        exact
        key={dog.name}
        activeClassName=""
        to={`/dogs/${dog.name.toLowerCase()}`}
      >
        {dog.name}
      </NavLink>
    ));
    return (
      <div>
        <nav>
          <NavLink exact activeClassName="" to="/dogs">
            Home
          </NavLink>
          {dogLinks}
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
