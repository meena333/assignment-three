import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addModel } from "./actions/test";
import ModelDetails from "./ModelDetails";

const modelsArray = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
];

class App extends Component {
  state = {
    name: "",
    manufacturer: "",
    year: "",
    origin: ""
  };

  handleClick = event => {
    event.preventDefault();
    const currentModel = modelsArray.find(
      model => model.name === this.state.name
    );
    this.props.addModel(
      currentModel.name,
      currentModel.manufacturer,
      currentModel.year,
      currentModel.origin
    );
  };

  updateSelection = event => {
    event.preventDefault();
    const currentModel = event.target.value;
    this.setState({
      name: currentModel
    });
  };

  render() {
    return (
      <div className="App">
        <main>
          <select value={this.state.name} onChange={this.updateSelection}>
            <option value="">-- pick a model --</option>
            {modelsArray.map((model, index) => {
              return (
                <option value={model.name} key={index}>
                  {model.name} ({model.year})
                </option>
              );
            })}
          </select>

          <button className="Button" onClick={this.handleClick}>
            Add
          </button>
          <ModelDetails model={this.props.models} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    models: state
  };
};

export default connect(
  mapStateToProps,
  { addModel }
)(App);
