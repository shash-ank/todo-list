import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleTaskCompleted = this.toggleTaskCompleted.bind(this);
    this.addToTaskList = this.addToTaskList.bind(this);
    this.state = { name: "", tasks: [] };
    this.taskList = [];
  }

  handleTaskChange = (taskName) => {
    this.setState({ name: taskName });
    const newTask = {
      id: "todo-" + nanoid(),
      name: taskName,
      completed: false,
    };

    this.setState(
      { tasks: [...this.state.tasks, newTask] },
      this.addToTaskList
    );
  };

  deleteTask(id) {
    console.log(id);
    const remainingTasks = this.state.tasks.filter((task) => id !== task.id);
    this.setState({ tasks: remainingTasks }, this.addToTaskList);
  }

  toggleTaskCompleted = (id) => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks }, this.addToTaskList);
  };

  addToTaskList = () => {
    this.taskList = this.state.tasks.map((task) => (
      <TodoItem
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={this.toggleTaskCompleted}
        deleteTask={this.deleteTask}
      />
    ));

    this.props.onListChange(this.taskList);
  };
  render() {
    return (
      <div>
        <form>
          <TodoInput onTaskChange={this.handleTaskChange} />
        </form>
      </div>
    );
  }
}
export default Form;
//Data which a component itself owns is called state
