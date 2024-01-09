import React, { Component } from "react";

export default class ClassComponents_Input extends Component {
  state = {
    FirstName: "Ritesh",
    LastName: "Tak",
  };
  render() {
    return (
      <div>
        <input type="text" value={state.FirstName} />
        <span>
          Hello {this.state.FirstName} {this.state.LastName}
        </span>
      </div>
    );
  }
}
