import React, { Component } from "react";
import Header from "./components/Header/Header";
import MyResults from "./components/MyResuls/MyResults";
import SearchBar from "./components/SearchBar/SearchBar";
import "./styles.css";

const name = require("@rstacruz/startup-name-generator");

class App extends Component {
  state = {
    headerText: "Name It!",
    headerExpanded: true,
    suggestedNames: []
  };

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : []
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          headerExpand={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBar onInputChange={this.handleInputChange} />
        <MyResults suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
