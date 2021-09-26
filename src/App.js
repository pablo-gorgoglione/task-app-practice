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
    this.handleEdit = this.handleEdit.bind(this);
  }

  //news methods
  handleDelete = (newTasks) => {
    this.setState({
      tasks: newTasks,
    });
  };

  handleEdit = (text, id) => {
    const taskIndex = this.state.tasks.findIndex((t) => t.id === id);
    let newTasks = [...this.state.tasks];
    newTasks[taskIndex] = { ...newTasks[taskIndex], text: text };
    this.setState({
      tasks: newTasks,
    });
  };

  // olds
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
        <Overview
          tasks={tasks}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
