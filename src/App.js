// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: "",
        id: uniqid(),
      },
      tasks: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = (newTasks) => {
    this.setState({
      tasks: newTasks,
    });
  };

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
      },
    });
  };

  render() {
    const { tasks, task } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          {task.text !== "" && <button type="submit">Add Task</button>}
        </form>
        <Overview tasks={tasks} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
