import * as React from "react";

export default function ModelDetails(props) {
  const modelName = props.model.map((currentModel, index) => {
    return (
      <li key={index}>
        Name: {currentModel.name} Manufacturer: {currentModel.manufacturer}{" "}
        Year: {currentModel.year} Origin: {currentModel.origin}
      </li>
    );
  });

  return (
    <div>
      <ul>{modelName}</ul>
    </div>
  );
}
