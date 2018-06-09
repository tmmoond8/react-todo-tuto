import React, { Component } from "react";

class Palette extends Component {
  render() {
    const { onSelectColor } = this.props;
    const colorSet = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];
    return (
      <select onChange={onSelectColor} className="palette" name="palette">
        {colorSet.map(color => <option value={color}>{color}</option>)}
      </select>
    );
  }
}

export default Palette;
