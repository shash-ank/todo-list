import React from "react";

// import Form from "./Form";
class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.method = this.method.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onTaskChange(this.state.name);
  }
  method() {
    // event.preventDefault();
    console.log("hello world");
    console.log(this.state.name);
  }
  render() {
    return (
      <div className="input-component">
        <div>
          <label htmlFor="todo input" className="label_lg">
            What needs to be done?
          </label>
        </div>
        <span className="textBox">
          <input
            id="todo-input"
            type="text"
            placeholder="Enter a task"
            name="text"
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </span>
        <button
          type="submit"
          className="btn primary_btn "
          value="Submit"
          onClick={this.handleSubmit}
        >
          Add
        </button>
      </div>
    );
  }
}
export default TodoInput;
