import ClassComponentsFooter from "./ClassComponentsFooter";
import ClassComponentsHeader from "./ClassComponentsHeader";
import React from "react";

class ClassComponents extends React.Component {
  render() {
    return (
      <div>
        <ClassComponentsHeader title="Hello from title prop" color="red" />
        <h1>Hello from Ritesh First name</h1>
        <ClassComponentsFooter />
      </div>
    );
  }
}

export default ClassComponents;
