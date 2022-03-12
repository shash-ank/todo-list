import React from "react";

class TodoItem extends React.Component {
  render() {
    let propId = this.props.id;
    return (
      <li className="todo-item">
        <div className="item-cb">
          <input
            id={this.props.id}
            type="checkbox"
            defaultChecked={this.props.completed}
            onChange={() => this.props.toggleTaskCompleted(propId)}
          />
          <label className="todo-item-label" htmlFor={this.props.id}>
            {this.props.name}
          </label>

          <div class="del-btn">
            <button
              type="button"
              className="btn btn_danger"
              onClick={() => this.props.deleteTask(propId)}
            >
              Delete <span className="hidden"></span>
            </button>
          </div>
        </div>
      </li>
    );
  }
}
export default TodoItem;
