import React from "react";

class FilterButton extends React.Component {
  constructor(props) {
    super(props);
    // this.setFilter = this.setFilter.bind(this);
    // this.isPressed = this.isPressed.bind(this);
  }
  render() {
    return (
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed={this.props.isPressed}
        onClick={() => this.props.set_filter(this.props.name)}
      >
        <span className="visually-hidden">Show </span>
        <span>{this.props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    );
  }
}

export default FilterButton;
