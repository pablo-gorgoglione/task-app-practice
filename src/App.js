// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: '', 
        id: uniqid()
      },
      tasks: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = (newTasks) =>{
      // if(newTasks == null ){
      //   this.setState({
      //     tasks: [],
      //     })
      // }
      console.log (newTasks.length + '  check 3');
      // this.setState({
      //   tasks: [],
      //   })
      // this.setState({
      // tasks: newTasks,
      // })
  }

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
        text: '', 
        id: uniqid()
      },
    });
  };

  render() {
   // const { task, tasks } = this.state.;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={this.state.task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={this.state.tasks} onDelete={this.handleDelete} /> 
      </div>
    );
  }
}
// onDelete={this.handleDelete} 

export default App;
// {
//   task.text !== '' &&
//   // <button type="submit">Add Task</button>
// }