import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { render } from "@testing-library/react";
import React from "react";
import TodoItem from "./components/TodoItem";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleListChange = this.handleListChange.bind(this);

    this.state = { list: [], filter: "All" };
    this.FILTER_MAP = {
      All: () => true,
      Active: (task) => !task.props.completed,
      Completed: (task) => task.props.completed,
    };
    this.FILTER_NAMES = Object.keys(this.FILTER_MAP);
  }

  handleListChange(taskList) {
    this.setState({ list: taskList });
  }
  setFilter = (name) => {
    console.log("filter name: " + typeof name);
    this.setState({ filter: name });
  };

  render() {
    console.log(...this.state.list);
    let taskList = this.state.list
      .filter(this.FILTER_MAP[this.state.filter])
      .map((task) => (
        <TodoItem
          id={task.props.id}
          name={task.props.name}
          completed={task.props.completed}
          key={task.props.id}
          toggleTaskCompleted={task.props.toggleTaskCompleted}
          deleteTask={task.props.deleteTask}
        />
      ));
    let filterList = this.FILTER_NAMES.map((name) => (
      <FilterButton
        key={name}
        name={name}
        isPressed={name === this.state.filter}
        set_filter={this.setFilter}
      />
    ));
    let headingText = `${taskList.length} tasks remaining`;
    let tasksNoun = taskList.length !== 1 ? "tasks" : "task";
    headingText = `${taskList.length} ${tasksNoun} remaining`;
    return (
      <div className="App">
        <h1>Todo List</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <Form onListChange={this.handleListChange} />
        <div className="filters btn-group stack-exception">{filterList}</div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    );
  }
}

export default App;
