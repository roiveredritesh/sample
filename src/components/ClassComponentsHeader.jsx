import React, { Component } from "react";

export default class ClassComponentsHeader extends Component {
  render() {
    return (
      <header style={{ backgroundColor: this.props.color }}>
        <h1>Hello from header {this.props.title}</h1>
      </header>
    );
  }
}
