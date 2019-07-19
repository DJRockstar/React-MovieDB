import React, { Component } from "react";

class Genres extends Component {
  render() {
    const {
      genres,
      textProperty,
      valueProperty,
      onItemSelect,
      selectedItem
    } = this.props;
    return (
      <div>
        <ul className="list-group">
          {genres.map(g => (
            <li
              onClick={() => onItemSelect(g)}
              key={g[valueProperty]}
              className={
                g === selectedItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {g[textProperty]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Genres.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Genres;
